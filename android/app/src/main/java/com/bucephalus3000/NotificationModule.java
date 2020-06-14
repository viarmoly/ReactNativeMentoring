// import android.util.Log;
// import android.widget.Toast;
//
// import android.content.Context;
// import android.content.Intent;
// import android.app.NotificationManager;
// import android.app.NotificationChannel;
// import android.app.Notification;
// import android.app.PendingIntent;
// import com.facebook.react.bridge.ReactContextBaseJavaModule;
// import android.os.Build;
// import androidx.core.app.NotificationCompat;
// import androidx.core.app.NotificationManagerCompat;
// import androidx.core.app.NotificationCompat.Builder;
// import com.facebook.react.bridge.ReactApplicationContext;
// import com.facebook.react.bridge.NativeModule;
// import com.facebook.react.ReactPackage;
// import android.net.Uri;
// import android.app.NotificationManager.Policy;
//
// public class NotificationModule extends ReactContextBaseJavaModule {
//   private ReactApplicationContext reactContext;
//
//   public NotificationModule(ReactApplicationContext reactContext) {
//     super(reactContext);
//     this.reactContext = reactContext
//       Log.i("NotificationService", "NotificationService Constructor");
//     createNotificationChannel();
//     displayNotification();
//   }
//
//   private void displayNotification() {
//       Log.i("NotificationService", "NotificationService test");
//     Intent intent = new Intent();
//       intent.setAction(Intent.ACTION_SEND);
//       intent.putExtra(Intent.EXTRA_TEXT, "textMessage");
//       intent.setType("text/plain");
//     intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TASK);
//     Uri uri = intent.getData();
//
//     Log.i("NotificationService", "URI "+uri.toString());
//     PendingIntent pendingIntent = PendingIntent.getActivity(this.reactContext, 0, intent, PendingIntent.FLAG_UPDATE_CURRENT);
//
//     String CHANNEL_ID = "notificationsChannel";
//     NotificationCompat.Builder builder = new NotificationCompat.Builder(this.reactContext, CHANNEL_ID);
//       // builder.setSmallIcon(17301575);
//       builder.setContentTitle("Notifiks");
//       builder.setContentText("Narmal teksts");
//       builder.setPriority(NotificationCompat.PRIORITY_DEFAULT);
//       builder.setContentIntent(pendingIntent);
//       // builder.setAutoCancel(false);
//
//     NotificationManagerCompat notificationManager = NotificationManagerCompat.from(this.reactContext);
//     notificationManager.notify(123, builder.build());
//   }
//
//   private void createNotificationChannel() {
//     String CHANNEL_ID = "notificationsChannel";
//
//     if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
//       CharSequence name = new StringBuffer("charsequence");
//       String description = "kkads apraksts";
//       int importance = NotificationManager.IMPORTANCE_HIGH;
//       NotificationChannel channel = new NotificationChannel(CHANNEL_ID, name, importance);
//         channel.setDescription(description);
//         NotificationManager notificationManager = reactContext.getSystemService(NotificationManager.class);
//           notificationManager.createNotificationChannel(channel);
//     }
//   }
//
//   @Override
//   public String getName() {
//     return "NotificationService";
//   }
// }
