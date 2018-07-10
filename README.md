# Reproduction steps

1. Run the app in debug mode `react-native run-android`
2. Click the button
3. Observe that there are two logged values under "Bugsnag Test App", via Android Studio logcat
4. Run the app in debug mode `react-native run-android --variant=release`
5. Click the button
6. Observe that there is only one logged value under "Bugsnag Test App".
