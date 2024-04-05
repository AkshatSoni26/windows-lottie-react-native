#step 1.
install dependenices 'npm i'

#step 2.
goto 'windows\sampleDesktop\sampleDesktop.vcxproj' this file and add this code to after this "Microsoft.Cpp.targets"

`<PropertyGroup Label="LottieReactNativeProps">
    <LottieReactNativeDir>$([MSBuild]::GetDirectoryNameOfFileAbove($(MSBuildThisFileDirectory), 'node_modules\lottie-react-native\package.json'))\node_modules\lottie-react-native</LottieReactNativeDir>
</PropertyGroup>
<ImportGroup Label="LottieReactNativeTargets">
    <Import Project="$(LottieReactNativeDir)\src\windows\cppwinrt\PropertySheets\LottieGen.Auto.targets" />
</ImportGroup>`

#step 3.

install these NuGet packages:

LottieGen.MsBuild
Microsoft.UI.Xaml


#step 4.
add this code to 'windows\sampleDesktop\App.cpp' this file

`
#include <winrt/LottieReactNative.h>
#include <winrt/AnimatedVisuals.h>

...

PackageProviders().Append(winrt::LottieReactNative::ReactPackageProvider(winrt::AnimatedVisuals::LottieCodegenSourceProvider()));
`