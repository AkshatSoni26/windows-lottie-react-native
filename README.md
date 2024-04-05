# Installation Steps

## Step 1: Install Dependencies
Run the following command to install dependencies:

\`\`\`bash
npm i
\`\`\`

## Step 2: Configure Visual Studio Project
Navigate to the \`windows\sampleDesktop\sampleDesktop.vcxproj\` file and add the following code after the \`Microsoft.Cpp.targets\` section:

\`\`\`xml
<PropertyGroup Label="LottieReactNativeProps">
    <LottieReactNativeDir>$([MSBuild]::GetDirectoryNameOfFileAbove($(MSBuildThisFileDirectory), 'node_modules\lottie-react-native\package.json'))\node_modules\lottie-react-native</LottieReactNativeDir>
</PropertyGroup>
<ImportGroup Label="LottieReactNativeTargets">
    <Import Project="$(LottieReactNativeDir)\src\windows\cppwinrt\PropertySheets\LottieGen.Auto.targets" />
</ImportGroup>
\`\`\`

## Step 3: Install NuGet Packages
Install the following NuGet packages:

- LottieGen.MsBuild
- Microsoft.UI.Xaml

## Step 4: Integrate LottieReactNative
Add the following code to the \`windows\sampleDesktop\App.cpp\` file:

\`\`\`cpp
#include <winrt/LottieReactNative.h>
#include <winrt/AnimatedVisuals.h>

// Additional code...

PackageProviders().Append(winrt::LottieReactNative::ReactPackageProvider(winrt::AnimatedVisuals::LottieCodegenSourceProvider()));
\`\`\`
