# step 1.
install dependenices 'npm i'

# step 2.
goto 'windows\sampleDesktop\sampleDesktop.vcxproj' this file and add this code to after this "Microsoft.Cpp.targets"

`
<PropertyGroup Label="LottieReactNativeProps">
    <LottieReactNativeDir>$([MSBuild]::GetDirectoryNameOfFileAbove($(MSBuildThisFileDirectory), 'node_modules\lottie-react-native\package.json'))\node_modules\lottie-react-native</LottieReactNativeDir>
</PropertyGroup>
<ImportGroup Label="LottieReactNativeTargets">
    <Import Project="$(LottieReactNativeDir)\src\windows\cppwinrt\PropertySheets\LottieGen.Auto.targets" />
</ImportGroup>
`

# step 3.

install these NuGet packages:

LottieGen.MsBuild
Microsoft.UI.Xaml

# step 4.
add this code to 'windows\sampleDesktop\App.cpp' this file

`
#include <winrt/LottieReactNative.h>
#include <winrt/AnimatedVisuals.h>

...

PackageProviders().Append(winrt::LottieReactNative::ReactPackageProvider(winrt::AnimatedVisuals::LottieCodegenSourceProvider()));
`


# system info:- 

.NET SDK:
 Version:           8.0.202
 Commit:            25674bb2f4
 Workload version:  8.0.200-manifests.8cf8de6d

Runtime Environment:
 OS Name:     Windows
 OS Version:  10.0.19045
 OS Platform: Windows
 RID:         win-x64
 Base Path:   C:\Program Files\dotnet\sdk\8.0.202\

.NET workloads installed:
 [maui-windows]
   Installation Source: VS 17.9.34723.18
   Manifest Version:    8.0.7/8.0.100
   Manifest Path:       C:\Program Files\dotnet\sdk-manifests\8.0.100\microsoft.net.sdk.maui\8.0.7\WorkloadManifest.json
   Install Type:        FileBased

 [maccatalyst]
   Installation Source: VS 17.9.34723.18
   Manifest Version:    17.2.8004/8.0.100
   Manifest Path:       C:\Program Files\dotnet\sdk-manifests\8.0.100\microsoft.net.sdk.maccatalyst\17.2.8004\WorkloadManifest.json
   Install Type:        FileBased

 [ios]
   Installation Source: VS 17.9.34723.18
   Manifest Version:    17.2.8004/8.0.100
   Manifest Path:       C:\Program Files\dotnet\sdk-manifests\8.0.100\microsoft.net.sdk.ios\17.2.8004\WorkloadManifest.json
   Install Type:        FileBased

 [android]
   Installation Source: VS 17.9.34723.18
   Manifest Version:    34.0.52/8.0.100
   Manifest Path:       C:\Program Files\dotnet\sdk-manifests\8.0.100\microsoft.net.sdk.android\34.0.52\WorkloadManifest.json
   Install Type:        FileBased


Host:
  Version:      8.0.3
  Architecture: x64
  Commit:       9f4b1f5d66

.NET SDKs installed:
  6.0.420 [C:\Program Files\dotnet\sdk]
  8.0.202 [C:\Program Files\dotnet\sdk]

.NET runtimes installed:
  Microsoft.AspNetCore.App 6.0.28 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
  Microsoft.AspNetCore.App 8.0.3 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
  Microsoft.NETCore.App 6.0.21 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
  Microsoft.NETCore.App 6.0.28 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
  Microsoft.NETCore.App 7.0.17 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
  Microsoft.NETCore.App 8.0.3 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
  Microsoft.WindowsDesktop.App 6.0.21 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]
  Microsoft.WindowsDesktop.App 6.0.28 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]
  Microsoft.WindowsDesktop.App 8.0.3 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]

Other architectures found:
  x86   [C:\Program Files (x86)\dotnet]
    registered at [HKLM\SOFTWARE\dotnet\Setup\InstalledVersions\x86\InstallLocation]


# problem:- 
`× Building Solution: F:\sampleDesktop\windows\sampleDesktop\sampleDesktop.vcxproj(167,5): error MSB4019: The imp...
 × Build failed with message F:\sampleDesktop\windows\sampleDesktop\sampleDesktop.vcxproj(167,5): error MSB4019: The imported project "F:\sampleDesktop\node_modules\lottie-react-native\src\windows\cppwinrt\PropertySheets\LottieGen.Auto.targets" was not found. Confirm that the expression in the Import declaration "F:\sampleDesktop\node_modules\lottie-react-native\src\windows\cppwinrt\PropertySheets\LottieGen.Auto.targets" is correct, and that the file exists on disk.. Check your build configuration.
Command failed. Re-run the command with --logging for more information.`

# expected:- solution should build.