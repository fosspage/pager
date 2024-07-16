import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import RNAndroidNotificationListener, {
  RNAndroidNotificationListenerHeadlessJsName,
} from "react-native-android-notification-listener";

const status = await RNAndroidNotificationListener.getPermissionStatus();
console.log(status);

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center ">
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
