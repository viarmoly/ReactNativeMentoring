package com.bucephalus3000;

import android.util.Log;
import android.widget.Toast;

import android.content.Context;
import android.content.Intent;
import android.app.NotificationManager;
import android.app.NotificationChannel;
import android.app.Notification;
import android.app.PendingIntent;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import android.os.Build;
import androidx.core.app.NotificationCompat;
import androidx.core.app.NotificationManagerCompat;
import androidx.core.app.NotificationCompat.Builder;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.ReactPackage;
import android.net.Uri;
import android.app.NotificationManager.Policy;

class NotificationModule(reactContext: ReactApplicationContext?)
    : ReactContextBaseJavaModule(reactContext) {

    val channelId = "com.bucephalus3000"
    lateinit var notificationManager: NotificationManager;

    override fun getName(): String {
        return "NotificationModule"
    }

    @ReactMethod
    public fun initModule() {
        notificationManager = reactApplicationContext.getSystemService(
                Context.NOTIFICATION_SERVICE) as NotificationManager

        createNotificationChannel(
                channelId,
                "NOTIFICATION FOR REACT NATIVE",
                "The channel;phjugioshgoudfhgohgohguhfgohdhfughgu")
    }

    private fun createNotificationChannel(id:String, name:String, descrtion:String){
        val imporance = NotificationManager.IMPORTANCE_LOW
        val channel = NotificationChannel(id, name, imporance)

        channel.description = descrtion
        channel.enableVibration(true)

        notificationManager?.createNotificationChannel(channel)
    }


    @ReactMethod
    public fun showNotification(title: String, message: String, callback:Callback) {
        val notification = Notification.Builder(reactApplicationContext, channelId)
                .setContetTitle(title)
                .setContetText(message)
                .setSmallIcon(android.R.drawable.ic_dialog_info)
                .setChannelId(channelId)
                .setContentIntent(createPendingIntent())
                .build()
        val notificationId = 1;
        notificationManager?.notify(notificationId, notification)
        callback?invoke(notificationId)
    }

    @ReactMethod
    public fun updateNotification(id: kotlin.Int, title: String, message: String) {
        val notification = Notification.Builder(reactApplicationContext, channelId)
                .setContetTitle(title)
                .setContetText(message)
                .setSmallIcon(android.R.drawable.ic_dialog_info)
                .setChannelId(channelId)
                .build()

        notificationManager?.notify(notificationId, notification)
    }

    @ReactMethod
    public fun remoceNotification(id: kotlin.Int) {

        notificationManager?.cancel(id)
    }


}


