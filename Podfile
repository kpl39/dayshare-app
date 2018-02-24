# Uncomment the next line to define a global platform for your project
# platform :ios, '9.0'

target 'DayShare' do
    rn_path = '../node_modules/react-native'
    rn_maps_path = '../node_modules/react-native-maps'
    
  
    pod 'yoga', path: "#{rn_path}/ReactCommon/yoga/yoga.podspec"
    pod 'React', path: rn_path, subspecs: [
      'Core',
      'RCTActionSheet',
      'RCTAnimation',
      'RCTGeolocation',
      'RCTImage',
      'RCTLinkingIOS',
      'RCTNetwork',
      'RCTSettings',
      'RCTText',
      'RCTVibration',
      'RCTWebSocket',
      'BatchedBridge'
    ]

    pod 'react-native-material-kit', :path => '../node_modules/react-native-material-kit'

    pod 'react-native-maps', path: rn_maps_path
    pod 'GoogleMaps'  # Remove this line if you don't want to support Google Maps on iOS
    pod 'react-native-google-maps', path: rn_maps_path  # Remove this line if you don't want to support Google Maps on iOS
    pod 'Firebase/Core'
    pod 'Firebase/Auth'
    pod 'react-native-camera', :path => '../node_modules/react-native-camera'
    pod 'RNVectorIcons', :path => '../node_modules/react-native-vector-icons'
    pod 'RNFS', :path => '../node_modules/react-native-fs'

  end
  
  post_install do |installer|
    installer.pods_project.targets.each do |target|
      if target.name == 'react-native-google-maps'
        target.build_configurations.each do |config|
          config.build_settings['CLANG_ENABLE_MODULES'] = 'No'
        end
      end
      if target.name == "React"
        target.remove_from_project
      end
    end
  end