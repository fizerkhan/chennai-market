## Readme

Chennai Market is an Android app which built on [Ionic Framework](http://ionicframework.com/).
The purpose of this app is to provide live market price for veg, fruits, gold and silver in Chennai city.

### How to Run?

Web:

    $ ionic serve --lab

iOS Simulation:

    $ ionic build ios
    $ ionic emulate ios --livereload --consolelogs --serverlogs
      (or)
      ionic emulate ios -l -c -s

Android Simulation:

    $ ionic build android
    $ ionic emulate android --livereload --consolelogs --serverlogs
      (or)
      ionic emulate android -l -c -s


### How to test an app

Following command deploy apk in connected device

    $ ionic run android

If it does not work, you can do as follows

    $ ionic build android
    $ open platforms/android/ant-build/
    $ Drag and Drop the apk file `ChennaiMarket-debug-unaligned.apk` to android sd card using
       android file transfer
    $ Open Explorer in Android phone and click the apk to install.

### How to publish an app?

[Refer here](http://ionicframework.com/docs/guide/publishing.html)

Before release, increase version number both in config.xml and package.json

    $ cordova build --release android
    $ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore release-key.keystore platforms/android/ant-build/ChennaiMarket-release-unsigned.apk alias_name

    $ zipalign -v 4 platforms/android/ant-build/ChennaiMarket-release-unsigned.apk ChennaiMarket.apk
    $ mv ChennaiMarket.apk ../releases/v0.0.x/

Then upload to Google Play Store.


You may also use

    $ ionic package release android

After releasing, add console plugin

    $ cordova plugin add org.apache.cordova.console


### Required Cordova plugins

    $ cordova plugin add org.apache.cordova.network-information
    $ cordova plugin add https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin.git
    $ cordova plugin add org.apache.cordova.inappbrowser

