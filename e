[1mdiff --git a/package-lock.json b/package-lock.json[m
[1mindex 3e4c900..bb48047 100644[m
[1m--- a/package-lock.json[m
[1m+++ b/package-lock.json[m
[36m@@ -20,7 +20,7 @@[m
           "integrity": "sha512-Z9Yfa11F6B9Sg/BK9MnqnQ+aQYicPLtilXBp2yUtDt2JRCE0h26d33EnfO3ZxoNxG0T92OUucP3Ct7cpfkdFfw==",[m
           "dev": true,[m
           "requires": {[m
[31m-            "tslib": "1.10.0"[m
[32m+[m[32m            "tslib": "^1.9.0"[m
           }[m
         }[m
       }[m
[36m@@ -30,10 +30,10 @@[m
       "resolved": "https://registry.npmjs.org/@angular-devkit/build-optimizer/-/build-optimizer-0.0.35.tgz",[m
       "integrity": "sha512-7JxZZAYFSCc0tP6+NrRn3b2Cd1b9d+a3+OfwVNyNsNd2unelqUMko2hm0KLbC8BXcXt/OILg1E/ZgLAXSS47nw==",[m
       "requires": {[m
[31m-        "loader-utils": "1.2.3",[m
[31m-        "source-map": "0.5.7",[m
[31m-        "typescript": "2.6.2",[m
[31m-        "webpack-sources": "1.4.3"[m
[32m+[m[32m        "loader-utils": "^1.1.0",[m
[32m+[m[32m        "source-map": "^0.5.6",[m
[32m+[m[32m        "typescript": "~2.6.1",[m
[32m+[m[32m        "webpack-sources": "^1.0.1"[m
       },[m
       "dependencies": {[m
         "big.js": {[m
[36m@@ -46,7 +46,7 @@[m
           "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.1.tgz",[m
           "integrity": "sha512-aKS4WQjPenRxiQsC93MNfjx+nbF4PAdYzmd/1JIj8HYzqfbu86beTuNgXDzPknWk0n0uARlyewZo4s++ES36Ow==",[m
           "requires": {[m
[31m-            "minimist": "1.2.0"[m
[32m+[m[32m            "minimist": "^1.2.0"[m
           }[m
         },[m
         "loader-utils": {[m
[36m@@ -54,9 +54,9 @@[m
           "resolved": "https://registry.npmjs.org/loader-utils/-/loader-utils-1.2.3.tgz",[m
           "integrity": "sha512-fkpz8ejdnEMG3s37wGL07iSBDg99O9D5yflE9RGNH3hRdx9SOwYfnGYdZOUIZitN8E+E2vkq3MUMYMvPYl5ZZA==",[m
           "requires": {[m
[31m-            "big.js": "5.2.2",[m
[31m-            "emojis-list": "2.1.0",[m
[31m-            "json5": "1.0.1"[m
[32m+[m[32m            "big.js": "^5.2.2",[m
[32m+[m[32m            "emojis-list": "^2.0.0",[m
[32m+[m[32m            "json5": "^1.0.1"[m
           }[m
         },[m
         "minimist": {[m
[36m@@ -95,7 +95,7 @@[m
           "integrity": "sha512-Z9Yfa11F6B9Sg/BK9MnqnQ+aQYicPLtilXBp2yUtDt2JRCE0h26d33EnfO3ZxoNxG0T92OUucP3Ct7cpfkdFfw==",[m
           "dev": true,[m
           "requires": {[m
[31m-            "tslib": "1.10.0"[m
[32m+[m[32m            "tslib": "^1.9.0"[m
           }[m
         }[m
       }[m
[36m@@ -116,7 +116,7 @@[m
           "integrity": "sha512-Z9Yfa11F6B9Sg/BK9MnqnQ+aQYicPLtilXBp2yUtDt2JRCE0h26d33EnfO3ZxoNxG0T92OUucP3Ct7cpfkdFfw==",[m
           "dev": true,[m
           "requires": {[m
[31m-            "tslib": "1.10.0"[m
[32m+[m[32m            "tslib": "^1.9.0"[m
           }[m
         }[m
       }[m
[36m@@ -126,8 +126,8 @@[m
       "resolved": "https://registry.npmjs.org/@angular/cdk/-/cdk-8.2.3.tgz",[m
       "integrity": "sha512-ZwO5Sn720RA2YvBqud0JAHkZXjmjxM0yNzCO8RVtRE9i8Gl26Wk0j0nQeJkVm4zwv2QO8MwbKUKGTMt8evsokA==",[m
       "requires": {[m
[31m-        "parse5": "5.1.0",[m
[31m-        "tslib": "1.10.0"[m
[32m+[m[32m        "parse5": "^5.0.0",[m
[32m+[m[32m        "tslib": "^1.7.1"[m
       },[m
       "dependencies": {[m
         "parse5": {[m
[36m@@ -151,7 +151,7 @@[m
         "@schematics/update": "0.803.1",[m
         "@yarnpkg/lockfile": "1.1.0",[m
         "ansi-colors": "4.1.1",[m
[31m-        "debug": "4.1.1",[m
[32m+[m[32m        "debug": "^4.1.1",[m
         "ini": "1.3.5",[m
         "inquirer": "6.5.1",[m
         "npm-package-arg": "6.1.0",[m
[36m@@ -160,8 +160,8 @@[m
         "read-package-tree": "5.3.1",[m
         "semver": "6.3.0",[m
         "symbol-observable": "1.2.0",[m
[31m-        "universal-analytics": "0.4.20",[m
[31m-        "uuid": "3.3.3"[m
[32m+[m[32m        "universal-analytics": "^0.4.20",[m
[32m+[m[32m        "uuid": "^3.3.2"[m
       }[m
     },[m
     "@angular/common": {[m
[36m@@ -169,7 +169,7 @@[m
       "resolved": "https://registry.npmjs.org/@angular/common/-/common-8.2.4.tgz",[m
       "integrity": "sha512-sPeTkor3uf8T3MvpekS0ZQe9K/yzlHBSoMyT0bIPOYeDTHUph3f/0XyYhH7KSGXLo7tSw1Mx9Ua05nQ+VHtLGQ==",[m
       "requires": {[m
[31m-        "tslib": "1.10.0"[m
[32m+[m[32m        "tslib": "^1.9.0"[m
       }[m
     },[m
     "@angular/compiler": {[m
[36m@@ -177,7 +177,7 @@[m
       "resolved": "https://registry.npmjs.org/@angular/compiler/-/compiler-8.2.4.tgz",[m
       "integrity": "sha512-LYaYhQlW3GFiXrNywJBYQtsLOWmUFcgudacF1m7QHHhlljnkG3BqkosbT0Dkcl7ayrIDYT/ZMTkVmaiGvgAhnw==",[m
       "requires": {[m
[31m-        "tslib": "1.10.0"[m
[32m+[m[32m        "tslib": "^1.9.0"[m
       }[m
     },[m
     "@angular/compiler-cli": {[m
[36m@@ -187,14 +187,14 @@[m
       "dev": true,[m
       "requires": {[m
         "canonical-path": "1.0.0",[m
[31m-        "chokidar": "2.1.8",[m
[31m-        "convert-source-map": "1.6.0",[m
[31m-        "dependency-graph": "0.7.2",[m
[31m-        "magic-string": "0.25.3",[m
[31m-        "minimist": "1.2.0",[m
[31m-        "reflect-metadata": "0.1.13",[m
[31m-        "source-map": "0.6.1",[m
[31m-        "tslib": "1.10.0",[m
[32m+[m[32m        "chokidar": "^2.1.1",[m
[32m+[m[32m        "convert-source-map": "^1.5.1",[m
[32m+[m[32m        "dependency-graph": "^0.7.2",[m
[32m+[m[32m        "magic-string": "^0.25.0",[m
[32m+[m[32m        "minimist": "^1.2.0",[m
[32m+[m[32m        "reflect-metadata": "^0.1.2",[m
[32m+[m[32m        "source-map": "^0.6.1",[m
[32m+[m[32m        "tslib": "^1.9.0",[m
         "yargs": "13.1.0"[m
       },[m
       "dependencies": {[m
[36m@@ -217,7 +217,7 @@[m
       "resolved": "https://registry.npmjs.org/@angular/core/-/core-8.2.4.tgz",[m
       "integrity": "sha512-8FSdkUSb5S4+K2w49iLzrQF/jzcmoRnOogFZQ8CctiXQHSVHHF8AjpoFpFVUAI6/77UVL8CehlyBSKF5EE1Z8A==",[m
       "requires": {[m
[31m-        "tslib": "1.10.0"[m
[32m+[m[32m        "tslib": "^1.9.0"[m
       }[m
     },[m
     "@angular/flex-layout": {[m
[36m@@ -225,7 +225,7 @@[m
       "resolved": "https://registry.npmjs.org/@angular/flex-layout/-/flex-layout-8.0.0-beta.27.tgz",[m
       "integrity": "sha512-qmpvQPesU4ZQ56IscwgmVRpK2UnyV+gwvXUql7TMv0QV215hLcHczjGsrKkLfW2By5E7XEyDat9br72uVXcPMw==",[m
       "requires": {[m
[31m-        "tslib": "1.10.0"[m
[32m+[m[32m        "tslib": "^1.7.1"[m
       }[m
     },[m
     "@angular/forms": {[m
[36m@@ -233,7 +233,7 @@[m
       "resolved": "https://registry.npmjs.org/@angular/forms/-/forms-8.2.4.tgz",[m
       "integrity": "sha512-TsaMrfy/Ls9kpxxlkqaPSQCL3DWqIzh3fMd0aGXTjcsEFI3gztttAmE/dlU0dtVsQxD0M9cdqjjPqi0TGamfTw==",[m
       "requires": {[m
[31m-        "tslib": "1.10.0"[m
[32m+[m[32m        "tslib": "^1.9.0"[m
       }[m
     },[m
     "@angular/platform-browser": {[m
[36m@@ -241,7 +241,7 @@[m
       "resolved": "https://registry.npmjs.org/@angular/platform-browser/-/platform-browser-8.2.4.tgz",[m
       "integrity": "sha512-3nd71h6S4RT9lHu9mVGD/741O+8MBSjI1A0V8H/LjT79yWnkxoR6BgZA7KL76AeTTITagUcVIuxtNAaxssgLHg==",[m
       "requires": {[m
[31m-        "tslib": "1.10.0"[m
[32m+[m[32m        "tslib": "^1.9.0"[m
       }[m
     },[m
     "@angular/platform-browser-dynamic": {[m
[36m@@ -249,7 +249,7 @@[m
       "resolved": "https://registry.npmjs.org/@angular/platform-browser-dynamic/-/platform-browser-dynamic-8.2.4.tgz",[m
       "integrity": "sha512-qn84B796UZIl1KB+YcxwFCx/Ze439Zf7G8ZK+xKsUA16H0R6GswAgBndnYq8xFjww1g4dY7zNH/XZ2FKngETKA==",[m
       "requires": {[m
[31m-        "tslib": "1.10.0"[m
[32m+[m[32m        "tslib": "^1.9.0"[m
       }[m
     },[m
     "@angular/router": {[m
[36m@@ -257,7 +257,7 @@[m
       "resolved": "https://registry.npmjs.org/@angular/router/-/router-8.2.4.tgz",[m
       "integrity": "sha512-ZJwsztlD1vbb2HF9SgvHfpIK82BkOlDP2OmdZZavnxV7RstbU5hUkJ4lB4JB/EN9B76djo117CwOxxIveOhJMQ==",[m
       "requires": {[m
[31m-        "tslib": "1.10.0"[m
[32m+[m[32m        "tslib": "^1.9.0"[m
       }[m
     },[m
     "@babel/code-frame": {[m
[36m@@ -265,7 +265,7 @@[m
       "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.5.5.tgz",[m
       "integrity": "sha512-27d4lZoomVyo51VegxI20xZPuSHusqbQag/ztrBC7wegWoQ1nLREPVSKSW8byhTlzTKyNE4ifaTA6lCp7JjpFw==",[m
       "requires": {[m
[31m-        "@babel/highlight": "7.5.0"[m
[32m+[m[32m        "@babel/highlight": "^7.0.0"[m
       }[m
     },[m
     "@babel/core": {[m
[36m@@ -274,20 +274,20 @@[m
       "integrity": "sha512-FuRhDRtsd6IptKpHXAa+4WPZYY2ZzgowkbLBecEDDSje1X/apG7jQM33or3NdOmjXBKWGOg4JmSiRfUfuTtHXw==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "@babel/code-frame": "7.5.5",[m
[31m-        "@babel/generator": "7.6.0",[m
[31m-        "@babel/helpers": "7.6.0",[m
[31m-        "@babel/parser": "7.6.0",[m
[31m-        "@babel/template": "7.6.0",[m
[31m-        "@babel/traverse": "7.6.0",[m
[31m-        "@babel/types": "7.6.1",[m
[31m-        "convert-source-map": "1.6.0",[m
[31m-        "debug": "4.1.1",[m
[31m-        "json5": "2.1.0",[m
[31m-        "lodash": "4.17.15",[m
[31m-        "resolve": "1.12.0",[m
[31m-        "semver": "5.7.1",[m
[31m-        "source-map": "0.5.7"[m
[32m+[m[32m        "@babel/code-frame": "^7.5.5",[m
[32m+[m[32m        "@babel/generator": "^7.6.0",[m
[32m+[m[32m        "@babel/helpers": "^7.6.0",[m
[32m+[m[32m        "@babel/parser": "^7.6.0",[m
[32m+[m[32m        "@babel/template": "^7.6.0",[m
[32m+[m[32m        "@babel/traverse": "^7.6.0",[m
[32m+[m[32m        "@babel/types": "^7.6.0",[m
[32m+[m[32m        "convert-source-map": "^1.1.0",[m
[32m+[m[32m        "debug": "^4.1.0",[m
[32m+[m[32m        "json5": "^2.1.0",[m
[32m+[m[32m        "lodash": "^4.17.13",[m
[32m+[m[32m        "resolve": "^1.3.2",[m
[32m+[m[32m        "semver": "^5.4.1",[m
[32m+[m[32m        "source-map": "^0.5.0"[m
       },[m
       "dependencies": {[m
         "json5": {[m
[36m@@ -296,7 +296,7 @@[m
           "integrity": "sha512-8Mh9h6xViijj36g7Dxi+Y4S6hNGV96vcJZr/SrlHh1LR/pEn/8j/+qIBbs44YKl69Lrfctp4QD+AdWLTMqEZAQ==",[m
           "dev": true,[m
           "requires": {[m
[31m-            "minimist": "1.2.0"[m
[32m+[m[32m            "minimist": "^1.2.0"[m
           }[m
         },[m
         "minimist": {[m
[36m@@ -325,11 +325,11 @@[m
       "integrity": "sha512-Ms8Mo7YBdMMn1BYuNtKuP/z0TgEIhbcyB8HVR6PPNYp4P61lMsABiS4A3VG1qznjXVCf3r+fVHhm4efTYVsySA==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "@babel/types": "7.6.1",[m
[31m-        "jsesc": "2.5.2",[m
[31m-        "lodash": "4.17.15",[m
[31m-        "source-map": "0.5.7",[m
[31m-        "trim-right": "1.0.1"[m
[32m+[m[32m        "@babel/types": "^7.6.0",[m
[32m+[m[32m        "jsesc": "^2.5.1",[m
[32m+[m[32m        "lodash": "^4.17.13",[m
[32m+[m[32m        "source-map": "^0.5.0",[m
[32m+[m[32m        "trim-right": "^1.0.1"[m
       },[m
       "dependencies": {[m
         "jsesc": {[m
[36m@@ -352,9 +352,9 @@[m
       "integrity": "sha512-A95XEoCpb3TO+KZzJ4S/5uW5fNe26DjBGqf1o9ucyLyCmi1dXq/B3c8iaWTfBk3VvetUxl16e8tIrd5teOCfGw==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "@babel/helper-get-function-arity": "7.0.0",[m
[31m-        "@babel/template": "7.6.0",[m
[31m-        "@babel/types": "7.6.1"[m
[32m+[m[32m        "@babel/helper-get-function-arity": "^7.0.0",[m
[32m+[m[32m        "@babel/template": "^7.1.0",[m
[32m+[m[32m        "@babel/types": "^7.0.0"[m
       }[m
     },[m
     "@babel/helper-get-function-arity": {[m
[36m@@ -363,7 +363,7 @@[m
       "integrity": "sha512-r2DbJeg4svYvt3HOS74U4eWKsUAMRH01Z1ds1zx8KNTPtpTL5JAsdFv8BNyOpVqdFhHkkRDIg5B4AsxmkjAlmQ==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "@babel/types": "7.6.1"[m
[32m+[m[32m        "@babel/types": "^7.0.0"[m
       }[m
     },[m
     "@babel/helper-plugin-utils": {[m
[36m@@ -378,7 +378,7 @@[m
       "integrity": "sha512-Ro/XkzLf3JFITkW6b+hNxzZ1n5OQ80NvIUdmHspih1XAhtN3vPTuUFT4eQnela+2MaZ5ulH+iyP513KJrxbN7Q==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "@babel/types": "7.6.1"[m
[32m+[m[32m        "@babel/types": "^7.4.4"[m
       }[m
     },[m
     "@babel/helpers": {[m
[36m@@ -387,9 +387,9 @@[m
       "integrity": "sha512-W9kao7OBleOjfXtFGgArGRX6eCP0UEcA2ZWEWNkJdRZnHhW4eEbeswbG3EwaRsnQUAEGWYgMq1HsIXuNNNy2eQ==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "@babel/template": "7.6.0",[m
[31m-        "@babel/traverse": "7.6.0",[m
[31m-        "@babel/types": "7.6.1"[m
[32m+[m[32m        "@babel/template": "^7.6.0",[m
[32m+[m[32m        "@babel/traverse": "^7.6.0",[m
[32m+[m[32m        "@babel/types": "^7.6.0"[m
       }[m
     },[m
     "@babel/highlight": {[m
[36m@@ -397,9 +397,9 @@[m
       "resolved": "https://registry.npmjs.org/@babel/highlight/-/highlight-7.5.0.tgz",[m
       "integrity": "sha512-7dV4eu9gBxoM0dAnj/BCFDW9LFU0zvTrkq0ugM7pnHEgguOEeOz1so2ZghEdzviYzQEED0r4EAgpsBChKy1TRQ==",[m
       "requires": {[m
[31m-        "chalk": "2.4.2",[m
[31m-        "esutils": "2.0.3",[m
[31m-        "js-tokens": "4.0.0"[m
[32m+[m[32m        "chalk": "^2.0.0",[m
[32m+[m[32m        "esutils": "^2.0.2",[m
[32m+[m[32m        "js-tokens": "^4.0.0"[m
       }[m
     },[m
     "@babel/parser": {[m
[36m@@ -414,7 +414,7 @@[m
       "integrity": "sha512-t0JKGgqk2We+9may3t0xDdmneaXmyxq0xieYcKHxIsrJO64n1OiMWNUtc5gQK1PA0NpdCRrtZp4z+IUaKugrSA==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "@babel/helper-plugin-utils": "7.0.0"[m
[32m+[m[32m        "@babel/helper-plugin-utils": "^7.0.0"[m
       }[m
     },[m
     "@babel/runtime": {[m
[36m@@ -423,7 +423,7 @@[m
       "integrity": "sha512-89eSBLJsxNxOERC0Op4vd+0Bqm6wRMqMbFtV3i0/fbaWw/mJ8Q3eBvgX0G4SyrOOLCtbu98HspF8o09MRT+KzQ==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "regenerator-runtime": "0.13.3"[m
[32m+[m[32m        "regenerator-runtime": "^0.13.2"[m
       }[m
     },[m
     "@babel/template": {[m
[36m@@ -432,9 +432,9 @@[m
       "integrity": "sha512-5AEH2EXD8euCk446b7edmgFdub/qfH1SN6Nii3+fyXP807QRx9Q73A2N5hNwRRslC2H9sNzaFhsPubkS4L8oNQ==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "@babel/code-frame": "7.5.5",[m
[31m-        "@babel/parser": "7.6.0",[m
[31m-        "@babel/types": "7.6.1"[m
[32m+[m[32m        "@babel/code-frame": "^7.0.0",[m
[32m+[m[32m        "@babel/parser": "^7.6.0",[m
[32m+[m[32m        "@babel/types": "^7.6.0"[m
       }[m
     },[m
     "@babel/traverse": {[m
[36m@@ -443,15 +443,15 @@[m
       "integrity": "sha512-93t52SaOBgml/xY74lsmt7xOR4ufYvhb5c5qiM6lu4J/dWGMAfAh6eKw4PjLes6DI6nQgearoxnFJk60YchpvQ==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "@babel/code-frame": "7.5.5",[m
[31m-        "@babel/generator": "7.6.0",[m
[31m-        "@babel/helper-function-name": "7.1.0",[m
[31m-        "@babel/helper-split-export-declaration": "7.4.4",[m
[31m-        "@babel/parser": "7.6.0",[m
[31m-        "@babel/types": "7.6.1",[m
[31m-        "debug": "4.1.1",[m
[31m-        "globals": "11.12.0",[m
[31m-        "lodash": "4.17.15"[m
[32m+[m[32m        "@babel/code-frame": "^7.5.5",[m
[32m+[m[32m        "@babel/generator": "^7.6.0",[m
[32m+[m[32m        "@babel/helper-function-name": "^7.1.0",[m
[32m+[m[32m        "@babel/helper-split-export-declaration": "^7.4.4",[m
[32m+[m[32m        "@babel/parser": "^7.6.0",[m
[32m+[m[32m        "@babel/types": "^7.6.0",[m
[32m+[m[32m        "debug": "^4.1.0",[m
[32m+[m[32m        "globals": "^11.1.0",[m
[32m+[m[32m        "lodash": "^4.17.13"[m
       }[m
     },[m
     "@babel/types": {[m
[36m@@ -460,9 +460,9 @@[m
       "integrity": "sha512-X7gdiuaCmA0uRjCmRtYJNAVCc/q+5xSgsfKJHqMN4iNLILX39677fJE1O40arPMh0TTtS9ItH67yre6c7k6t0g==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "esutils": "2.0.3",[m
[31m-        "lodash": "4.17.15",[m
[31m-        "to-fast-properties": "2.0.0"[m
[32m+[m[32m        "esutils": "^2.0.2",[m
[32m+[m[32m        "lodash": "^4.17.13",[m
[32m+[m[32m        "to-fast-properties": "^2.0.0"[m
       }[m
     },[m
     "@cnakazawa/watch": {[m
[36m@@ -471,8 +471,8 @@[m
       "integrity": "sha512-r5160ogAvGyHsal38Kux7YYtodEKOj89RGb28ht1jh3SJb08VwRwAKKJL0bGb04Zd/3r9FL3BFIc3bBidYffCA==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "exec-sh": "0.3.2",[m
[31m-        "minimist": "1.2.0"[m
[32m+[m[32m        "exec-sh": "^0.3.2",[m
[32m+[m[32m        "minimist": "^1.2.0"[m
       },[m
       "dependencies": {[m
         "minimist": {[m
[36m@@ -488,7 +488,7 @@[m
       "resolved": "https://registry.npmjs.org/@fortawesome/angular-fontawesome/-/angular-fontawesome-0.5.0.tgz",[m
       "integrity": "sha512-5IR/jNMddiEpgApcqSMfp7l5kZqOtxQYzkSLW6iZ4MZHbQQ+Kc9tu9qi2hro6VFSk/sPxeYEzkzGZUNrMYiwOg==",[m
       "requires": {[m
[31m-        "tslib": "1.10.0"[m
[32m+[m[32m        "tslib": "^1.9.0"[m
       }[m
     },[m
     "@fortawesome/fontawesome-common-types": {[m
[36m@@ -501,7 +501,7 @@[m
       "resolved": "https://registry.npmjs.org/@fortawesome/fontawesome-svg-core/-/fontawesome-svg-core-1.2.22.tgz",[m
       "integrity": "sha512-Q941E4x8UfnMH3308n0qrgoja+GoqyiV846JTLoCcCWAKokLKrixCkq6RDBs8r+TtAWaLUrBpI+JFxQNX/WNPQ==",[m
       "requires": {[m
[31m-        "@fortawesome/fontawesome-common-types": "0.2.22"[m
[32m+[m[32m        "@fortawesome/fontawesome-common-types": "^0.2.22"[m
       }[m
     },[m
     "@fortawesome/free-solid-svg-icons": {[m
[36m@@ -509,7 +509,7 @@[m
       "resolved": "https://registry.npmjs.org/@fortawesome/free-solid-svg-icons/-/free-solid-svg-icons-5.10.2.tgz",[m
       "integrity": "sha512-9Os/GRUcy+iVaznlg8GKcPSQFpIQpAg14jF0DWsMdnpJfIftlvfaQCWniR/ex9FoOpSEOrlXqmUCFL+JGeciuA==",[m
       "requires": {[m
[31m-        "@fortawesome/fontawesome-common-types": "0.2.22"[m
[32m+[m[32m        "@fortawesome/fontawesome-common-types": "^0.2.22"[m
       }[m
     },[m
     "@hapi/address": {[m
[36m@@ -536,10 +536,10 @@[m
       "integrity": "sha512-entf8ZMOK8sc+8YfeOlM8pCfg3b5+WZIKBfUaaJT8UsjAAPjartzxIYm3TIbjvA4u+u++KbcXD38k682nVHDAQ==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "@hapi/address": "2.1.1",[m
[31m-        "@hapi/bourne": "1.3.2",[m
[31m-        "@hapi/hoek": "8.2.4",[m
[31m-        "@hapi/topo": "3.1.3"[m
[32m+[m[32m        "@hapi/address": "2.x.x",[m
[32m+[m[32m        "@hapi/bourne": "1.x.x",[m
[32m+[m[32m        "@hapi/hoek": "8.x.x",[m
[32m+[m[32m        "@hapi/topo": "3.x.x"[m
       }[m
     },[m
     "@hapi/topo": {[m
[36m@@ -548,7 +548,7 @@[m
       "integrity": "sha512-JmS9/vQK6dcUYn7wc2YZTqzIKubAQcJKu2KCKAru6es482U5RT5fP1EXCPtlXpiK7PR0On/kpQKI4fRKkzpZBQ==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "@hapi/hoek": "8.2.4"[m
[32m+[m[32m        "@hapi/hoek": "8.x.x"[m
       }[m
     },[m
     "@ionic/app-scripts": {[m
[36m@@ -557,32 +557,32 @@[m
       "integrity": "sha512-Wt6bBnLtyknbTn6ikUTst2HLs5ww+BL9FpYv2dQWZwDODYqyWFkQQvdXj0IFibU2umXFOH5nQXJin2vvgtovzA==",[m
       "requires": {[m
         "@angular-devkit/build-optimizer": "0.0.35",[m
[31m-        "autoprefixer": "7.2.6",[m
[31m-        "chalk": "2.4.2",[m
[31m-        "chokidar": "2.1.8",[m
[31m-        "clean-css": "4.2.1",[m
[31m-        "cross-spawn": "5.1.0",[m
[31m-        "dotenv-webpack": "1.7.0",[m
[31m-        "express": "4.17.1",[m
[31m-        "fs-extra": "4.0.3",[m
[31m-        "glob": "7.1.4",[m
[31m-        "json-loader": "0.5.7",[m
[31m-        "node-sass": "4.12.0",[m
[31m-        "os-name": "2.0.1",[m
[31m-        "postcss": "6.0.23",[m
[31m-        "proxy-middleware": "0.15.0",[m
[31m-        "reflect-metadata": "0.1.13",[m
[32m+[m[32m        "autoprefixer": "^7.2.6",[m
[32m+[m[32m        "chalk": "^2.4.0",[m
[32m+[m[32m        "chokidar": "^2.0.4",[m
[32m+[m[32m        "clean-css": "^4.1.11",[m
[32m+[m[32m        "cross-spawn": "^5.1.0",[m
[32m+[m[32m        "dotenv-webpack": "^1.5.7",[m
[32m+[m[32m        "express": "^4.16.3",[m
[32m+[m[32m        "fs-extra": "^4.0.2",[m
[32m+[m[32m        "glob": "^7.1.2",[m
[32m+[m[32m        "json-loader": "^0.5.7",[m
[32m+[m[32m        "node-sass": "^4.10.0",[m
[32m+[m[32m        "os-name": "^2.0.1",[m
[32m+[m[32m        "postcss": "^6.0.21",[m
[32m+[m[32m        "proxy-middleware": "^0.15.0",[m
[32m+[m[32m        "reflect-metadata": "^0.1.10",[m
         "rollup": "0.50.0",[m
         "rollup-plugin-commonjs": "8.2.6",[m
         "rollup-plugin-node-resolve": "3.0.0",[m
[31m-        "source-map": "0.6.1",[m
[31m-        "tiny-lr": "1.1.1",[m
[31m-        "tslint": "5.19.0",[m
[31m-        "tslint-eslint-rules": "4.1.1",[m
[32m+[m[32m        "source-map": "^0.6.1",[m
[32m+[m[32m        "tiny-lr": "^1.1.1",[m
[32m+[m[32m        "tslint": "^5.8.0",[m
[32m+[m[32m        "tslint-eslint-rules": "^4.1.1",[m
         "uglify-es": "3.2.2",[m
         "webpack": "3.12.0",[m
         "ws": "3.3.2",[m
[31m-        "xml2js": "0.4.22"[m
[32m+[m[32m        "xml2js": "^0.4.19"[m
       },[m
       "dependencies": {[m
         "acorn": {[m
[36m@@ -600,7 +600,7 @@[m
           "resolved": "https://registry.npmjs.org/async/-/async-2.6.3.tgz",[m
           "integrity": "sha512-zflvls11DCy+dQWzTW2dzuilv8Z5X/pjfmZOWba6TNIVDm+2UDaJmXSOXlasHKfNBs8oo3M0aT50fDEWfKZjXg==",[m
           "requires": {[m
[31m-            "lodash": "4.17.15"[m
[32m+[m[32m            "lodash": "^4.17.14"[m
           }[m
         },[m
         "autoprefixer": {[m
[36m@@ -608,12 +608,12 @@[m
           "resolved": "https://registry.npmjs.org/autoprefixer/-/autoprefixer-7.2.6.tgz",[m
           "integrity": "sha512-Iq8TRIB+/9eQ8rbGhcP7ct5cYb/3qjNYAR2SnzLCEcwF6rvVOax8+9+fccgXk4bEhQGjOZd5TLhsksmAdsbGqQ==",[m
           "requires": {[m
[31m-            "browserslist": "2.11.3",[m
[31m-            "caniuse-lite": "1.0.30000989",[m
[31m-            "normalize-range": "0.1.2",[m
[31m-            "num2fraction": "1.2.2",[m
[31m-            "postcss": "6.0.23",[m
[31m-            "postcss-value-parser": "3.3.1"[m
[32m+[m[32m            "browserslist": "^2.11.3",[m
[32m+[m[32m            "caniuse-lite": "^1.0.30000805",[m
[32m+[m[32m            "normalize-range": "^0.1.2",[m
[32m+[m[32m            "num2fraction": "^1.2.2",[m
[32m+[m[32m            "postcss": "^6.0.17",[m
[32m+[m[32m            "postcss-value-parser": "^3.2.3"[m
           }[m
         },[m
         "big.js": {[m
[36m@@ -626,8 +626,8 @@[m
           "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-2.11.3.tgz",[m
           "integrity": "sha512-yWu5cXT7Av6mVwzWc8lMsJMHWn4xyjSuGYi4IozbVTLUOEYPSagUB8kiMDUHA1fS3zjr8nkxkn9jdvug4BBRmA==",[m
           "requires": {[m
[31m-            "caniuse-lite": "1.0.30000989",[m
[31m-            "electron-to-chromium": "1.3.260"[m
[32m+[m[32m            "caniuse-lite": "^1.0.30000792",[m
[32m+[m[32m            "electron-to-chromium": "^1.3.30"[m
           }[m
         },[m
         "camelcase": {[m
[36m@@ -640,9 +640,9 @@[m
           "resolved": "https://registry.npmjs.org/cliui/-/cliui-3.2.0.tgz",[m
           "integrity": "sha1-EgYBU3qRbSmUD5NNo7SNWFo5IT0=",[m
           "requires": {[m
[31m-            "string-width": "1.0.2",[m
[31m-            "strip-ansi": "3.0.1",[m
[31m-            "wrap-ansi": "2.1.0"[m
[32m+[m[32m            "string-width": "^1.0.1",[m
[32m+[m[32m            "strip-ansi": "^3.0.1",[m
[32m+[m[32m            "wrap-ansi": "^2.0.0"[m
           },[m
           "dependencies": {[m
             "string-width": {[m
[36m@@ -650,9 +650,9 @@[m
               "resolved": "https://registry.npmjs.org/string-width/-/string-width-1.0.2.tgz",[m
               "integrity": "sha1-EYvfW4zcUaKn5w0hHgfisLmxB9M=",[m
               "requires": {[m
[31m-                "code-point-at": "1.1.0",[m
[31m-                "is-fullwidth-code-point": "1.0.0",[m
[31m-                "strip-ansi": "3.0.1"[m
[32m+[m[32m                "code-point-at": "^1.0.0",[m
[32m+[m[32m                "is-fullwidth-code-point": "^1.0.0",[m
[32m+[m[32m                "strip-ansi": "^3.0.0"[m
               }[m
             }[m
           }[m
[36m@@ -667,9 +667,9 @@[m
           "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-5.1.0.tgz",[m
           "integrity": "sha1-6L0O/uWPz/b4+UUQoKVUu/ojVEk=",[m
           "requires": {[m
[31m-            "lru-cache": "4.1.5",[m
[31m-            "shebang-command": "1.2.0",[m
[31m-            "which": "1.3.1"[m
[32m+[m[32m            "lru-cache": "^4.0.1",[m
[32m+[m[32m            "shebang-command": "^1.2.0",[m
[32m+[m[32m            "which": "^1.2.9"[m
           }[m
         },[m
         "enhanced-resolve": {[m
[36m@@ -677,10 +677,10 @@[m
           "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-3.4.1.tgz",[m
           "integrity": "sha1-BCHjOf1xQZs9oT0Smzl5BAIwR24=",[m
           "requires": {[m
[31m-            "graceful-fs": "4.2.2",[m
[31m-            "memory-fs": "0.4.1",[m
[31m-            "object-assign": "4.1.1",[m
[31m-            "tapable": "0.2.9"[m
[32m+[m[32m            "graceful-fs": "^4.1.2",[m
[32m+[m[32m            "memory-fs": "^0.4.0",[m
[32m+[m[32m            "object-assign": "^4.0.1",[m
[32m+[m[32m            "tapable": "^0.2.7"[m
           }[m
         },[m
         "execa": {[m
[36m@@ -688,13 +688,13 @@[m
           "resolved": "https://registry.npmjs.org/execa/-/execa-0.7.0.tgz",[m
           "integrity": "sha1-lEvs00zEHuMqY6n68nrVpl/Fl3c=",[m
           "requires": {[m
[31m-            "cross-spawn": "5.1.0",[m
[31m-            "get-stream": "3.0.0",[m
[31m-            "is-stream": "1.1.0",[m
[31m-            "npm-run-path": "2.0.2",[m
[31m-            "p-finally": "1.0.0",[m
[31m-            "signal-exit": "3.0.2",[m
[31m-            "strip-eof": "1.0.0"[m
[32m+[m[32m            "cross-spawn": "^5.0.1",[m
[32m+[m[32m            "get-stream": "^3.0.0",[m
[32m+[m[32m            "is-stream": "^1.1.0",[m
[32m+[m[32m            "npm-run-path": "^2.0.0",[m
[32m+[m[32m            "p-finally": "^1.0.0",[m
[32m+[m[32m            "signal-exit": "^3.0.0",[m
[32m+[m[32m            "strip-eof": "^1.0.0"[m
           }[m
         },[m
         "find-up": {[m
[36m@@ -702,7 +702,7 @@[m
           "resolved": "https://registry.npmjs.org/find-up/-/find-up-2.1.0.tgz",[m
           "integrity": "sha1-RdG35QbHF93UgndaK3eSCjwMV6c=",[m
           "requires": {[m
[31m-            "locate-path": "2.0.0"[m
[32m+[m[32m            "locate-path": "^2.0.0"[m
           }[m
         },[m
         "fs-extra": {[m
[36m@@ -710,9 +710,9 @@[m
           "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-4.0.3.tgz",[m
           "integrity": "sha512-q6rbdDd1o2mAnQreO7YADIxf/Whx4AHBiRf6d+/cVT8h44ss+lHgxf1FemcqDnQt9X3ct4McHr+JMGlYSsK7Cg==",[m
           "requires": {[m
[31m-            "graceful-fs": "4.2.2",[m
[31m-            "jsonfile": "4.0.0",[m
[31m-            "universalify": "0.1.2"[m
[32m+[m[32m            "graceful-fs": "^4.1.2",[m
[32m+[m[32m            "jsonfile": "^4.0.0",[m
[32m+[m[32m            "universalify": "^0.1.0"[m
           }[m
         },[m
         "get-caller-file": {[m
[36m@@ -740,7 +740,7 @@[m
           "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz",[m
           "integrity": "sha1-754xOG8DGn8NZDr4L95QxFfvAMs=",[m
           "requires": {[m
[31m-            "number-is-nan": "1.0.1"[m
[32m+[m[32m            "number-is-nan": "^1.0.0"[m
           }[m
         },[m
         "jsonfile": {[m
[36m@@ -748,7 +748,7 @@[m
           "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-4.0.0.tgz",[m
           "integrity": "sha1-h3Gq4HmbZAdrdmQPygWPnBDjPss=",[m
           "requires": {[m
[31m-            "graceful-fs": "4.2.2"[m
[32m+[m[32m            "graceful-fs": "^4.1.6"[m
           }[m
         },[m
         "lcid": {[m
[36m@@ -756,7 +756,7 @@[m
           "resolved": "https://registry.npmjs.org/lcid/-/lcid-1.0.0.tgz",[m
           "integrity": "sha1-MIrMr6C8SDo4Z7S28rlQYlHRuDU=",[m
           "requires": {[m
[31m-            "invert-kv": "1.0.0"[m
[32m+[m[32m            "invert-kv": "^1.0.0"[m
           }[m
         },[m
         "load-json-file": {[m
[36m@@ -764,10 +764,10 @@[m
           "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-2.0.0.tgz",[m
           "integrity": "sha1-eUfkIUmvgNaWy/eXvKq8/h/inKg=",[m
           "requires": {[m
[31m-            "graceful-fs": "4.2.2",[m
[31m-            "parse-json": "2.2.0",[m
[31m-            "pify": "2.3.0",[m
[31m-            "strip-bom": "3.0.0"[m
[32m+[m[32m            "graceful-fs": "^4.1.2",[m
[32m+[m[32m            "parse-json": "^2.2.0",[m
[32m+[m[32m            "pify": "^2.0.0",[m
[32m+[m[32m            "strip-bom": "^3.0.0"[m
           }[m
         },[m
         "loader-utils": {[m
[36m@@ -775,9 +775,9 @@[m
           "resolved": "https://registry.npmjs.org/loader-utils/-/loader-utils-1.2.3.tgz",[m
           "integrity": "sha512-fkpz8ejdnEMG3s37wGL07iSBDg99O9D5yflE9RGNH3hRdx9SOwYfnGYdZOUIZitN8E+E2vkq3MUMYMvPYl5ZZA==",[m
           "requires": {[m
[31m-            "big.js": "5.2.2",[m
[31m-            "emojis-list": "2.1.0",[m
[31m-            "json5": "1.0.1"[m
[32m+[m[32m            "big.js": "^5.2.2",[m
[32m+[m[32m            "emojis-list": "^2.0.0",[m
[32m+[m[32m            "json5": "^1.0.1"[m
           },[m
           "dependencies": {[m
             "json5": {[m
[36m@@ -785,7 +785,7 @@[m
               "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.1.tgz",[m
               "integrity": "sha512-aKS4WQjPenRxiQsC93MNfjx+nbF4PAdYzmd/1JIj8HYzqfbu86beTuNgXDzPknWk0n0uARlyewZo4s++ES36Ow==",[m
               "requires": {[m
[31m-                "minimist": "1.2.0"[m
[32m+[m[32m                "minimist": "^1.2.0"[m
               }[m
             }[m
           }[m
[36m@@ -795,8 +795,8 @@[m
           "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-2.0.0.tgz",[m
           "integrity": "sha1-K1aLJl7slExtnA3pw9u7ygNUzY4=",[m
           "requires": {[m
[31m-            "p-locate": "2.0.0",[m
[31m-            "path-exists": "3.0.0"[m
[32m+[m[32m            "p-locate": "^2.0.0",[m
[32m+[m[32m            "path-exists": "^3.0.0"[m
           }[m
         },[m
         "lru-cache": {[m
[36m@@ -804,8 +804,8 @@[m
           "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-4.1.5.tgz",[m
           "integrity": "sha512-sWZlbEP2OsHNkXrMl5GYk/jKk70MBng6UU4YI/qGDYbgf6YbP4EvmqISbXCoJiRKs+1bSpFHVgQxvJ17F2li5g==",[m
           "requires": {[m
[31m-            "pseudomap": "1.0.2",[m
[31m-            "yallist": "2.1.2"[m
[32m+[m[32m            "pseudomap": "^1.0.2",[m
[32m+[m[32m            "yallist": "^2.1.2"[m
           }[m
         },[m
         "mem": {[m
[36m@@ -813,7 +813,7 @@[m
           "resolved": "https://registry.npmjs.org/mem/-/mem-1.1.0.tgz",[m
           "integrity": "sha1-Xt1StIXKHZAP5kiVUFOZoN+kX3Y=",[m
           "requires": {[m
[31m-            "mimic-fn": "1.2.0"[m
[32m+[m[32m            "mimic-fn": "^1.0.0"[m
           }[m
         },[m
         "mimic-fn": {[m
[36m@@ -831,9 +831,9 @@[m
           "resolved": "https://registry.npmjs.org/os-locale/-/os-locale-2.1.0.tgz",[m
           "integrity": "sha512-3sslG3zJbEYcaC4YVAvDorjGxc7tv6KVATnLPZONiljsUncvihe9BQoVCEs0RZ1kmf4Hk9OBqlZfJZWI4GanKA==",[m
           "requires": {[m
[31m-            "execa": "0.7.0",[m
[31m-            "lcid": "1.0.0",[m
[31m-            "mem": "1.1.0"[m
[32m+[m[32m            "execa": "^0.7.0",[m
[32m+[m[32m            "lcid": "^1.0.0",[m
[32m+[m[32m            "mem": "^1.1.0"[m
           }[m
         },[m
         "p-limit": {[m
[36m@@ -841,7 +841,7 @@[m
           "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-1.3.0.tgz",[m
           "integrity": "sha512-vvcXsLAJ9Dr5rQOPk7toZQZJApBl2K4J6dANSsEuh6QI41JYcsS/qhTGa9ErIUUgK3WNQoJYvylxvjqmiqEA9Q==",[m
           "requires": {[m
[31m-            "p-try": "1.0.0"[m
[32m+[m[32m            "p-try": "^1.0.0"[m
           }[m
         },[m
         "p-locate": {[m
[36m@@ -849,7 +849,7 @@[m
           "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-2.0.0.tgz",[m
           "integrity": "sha1-IKAQOyIqcMj9OcwuWAaA893l7EM=",[m
           "requires": {[m
[31m-            "p-limit": "1.3.0"[m
[32m+[m[32m            "p-limit": "^1.1.0"[m
           }[m
         },[m
         "p-try": {[m
[36m@@ -862,7 +862,7 @@[m
           "resolved": "https://registry.npmjs.org/path-type/-/path-type-2.0.0.tgz",[m
           "integrity": "sha1-8BLMuEFbcJb8LaoQVMPXI4lZTHM=",[m
           "requires": {[m
[31m-            "pify": "2.3.0"[m
[32m+[m[32m            "pify": "^2.0.0"[m
           }[m
         },[m
         "postcss": {[m
[36m@@ -870,9 +870,9 @@[m
           "resolved": "https://registry.npmjs.org/postcss/-/postcss-6.0.23.tgz",[m
           "integrity": "sha512-soOk1h6J3VMTZtVeVpv15/Hpdl2cBLX3CAw4TAbkpTJiNPk9YP/zWcD1ND+xEtvyuuvKzbxliTOIyvkSeSJ6ag==",[m
           "requires": {[m
[31m-            "chalk": "2.4.2",[m
[31m-            "source-map": "0.6.1",[m
[31m-            "supports-color": "5.5.0"[m
[32m+[m[32m            "chalk": "^2.4.1",[m
[32m+[m[32m            "source-map": "^0.6.1",[m
[32m+[m[32m            "supports-color": "^5.4.0"[m
           }[m
         },[m
         "postcss-value-parser": {[m
[36m@@ -885,9 +885,9 @@[m
           "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-2.0.0.tgz",[m
           "integrity": "sha1-jvHAYjxqbbDcZxPEv6xGMysjaPg=",[m
           "requires": {[m
[31m-            "load-json-file": "2.0.0",[m
[31m-            "normalize-package-data": "2.5.0",[m
[31m-            "path-type": "2.0.0"[m
[32m+[m[32m            "load-json-file": "^2.0.0",[m
[32m+[m[32m            "normalize-package-data": "^2.3.2",[m
[32m+[m[32m            "path-type": "^2.0.0"[m
           }[m
         },[m
         "read-pkg-up": {[m
[36m@@ -895,8 +895,8 @@[m
           "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-2.0.0.tgz",[m
           "integrity": "sha1-a3KoBImE4MQeeVEP1en6mbO1Sb4=",[m
           "requires": {[m
[31m-            "find-up": "2.1.0",[m
[31m-            "read-pkg": "2.0.0"[m
[32m+[m[32m            "find-up": "^2.0.0",[m
[32m+[m[32m            "read-pkg": "^2.0.0"[m
           }[m
         },[m
         "require-main-filename": {[m
[36m@@ -919,8 +919,8 @@[m
           "resolved": "https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz",[m
           "integrity": "sha512-nOqH59deCq9SRHlxq1Aw85Jnt4w6KvLKqWVik6oA9ZklXLNIOlqg4F2yrT1MVaTjAqvVwdfeZ7w7aCvJD7ugkw==",[m
           "requires": {[m
[31m-            "is-fullwidth-code-point": "2.0.0",[m
[31m-            "strip-ansi": "4.0.0"[m
[32m+[m[32m            "is-fullwidth-code-point": "^2.0.0",[m
[32m+[m[32m            "strip-ansi": "^4.0.0"[m
           },[m
           "dependencies": {[m
             "ansi-regex": {[m
[36m@@ -938,7 +938,7 @@[m
               "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",[m
               "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",[m
               "requires": {[m
[31m-                "ansi-regex": "3.0.0"[m
[32m+[m[32m                "ansi-regex": "^3.0.0"[m
               }[m
             }[m
           }[m
[36m@@ -948,7 +948,7 @@[m
           "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",[m
           "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",[m
           "requires": {[m
[31m-            "ansi-regex": "2.1.1"[m
[32m+[m[32m            "ansi-regex": "^2.0.0"[m
           }[m
         },[m
         "strip-bom": {[m
[36m@@ -966,8 +966,8 @@[m
           "resolved": "https://registry.npmjs.org/uglify-es/-/uglify-es-3.2.2.tgz",[m
           "integrity": "sha512-l+s5VLzFwGJfS+fbqaGf/Dfwo1MF13jLOF2ekL0PytzqEqQ6cVppvHf4jquqFok+35USMpKjqkYxy6pQyUcuug==",[m
           "requires": {[m
[31m-            "commander": "2.12.2",[m
[31m-            "source-map": "0.6.1"[m
[32m+[m[32m            "commander": "~2.12.1",[m
[32m+[m[32m            "source-map": "~0.6.1"[m
           }[m
         },[m
         "webpack": {[m
[36m@@ -975,28 +975,28 @@[m
           "resolved": "https://registry.npmjs.org/webpack/-/webpack-3.12.0.tgz",[m
           "integrity": "sha512-Sw7MdIIOv/nkzPzee4o0EdvCuPmxT98+vVpIvwtcwcF1Q4SDSNp92vwcKc4REe7NItH9f1S4ra9FuQ7yuYZ8bQ==",[m
           "requires": {[m
[31m-            "acorn": "5.7.3",[m
[31m-            "acorn-dynamic-import": "2.0.2",[m
[31m-            "ajv": "6.10.2",[m
[31m-            "ajv-keywords": "3.4.1",[m
[31m-            "async": "2.6.3",[m
[31m-            "enhanced-resolve": "3.4.1",[m
[31m-            "escope": "3.6.0",[m
[31m-            "interpret": "1.2.0",[m
[31m-            "json-loader": "0.5.7",[m
[31m-            "json5": "0.5.1",[m
[31m-            "loader-runner": "2.4.0",[m
[31m-            "loader-utils": "1.2.3",[m
[31m-            "memory-fs": "0.4.1",[m
[31m-            "mkdirp": "0.5.1",[m
[31m-            "node-libs-browser": "2.2.1",[m
[31m-            "source-map": "0.5.7",[m
[31m-            "supports-color": "4.5.0",[m
[31m-            "tapable": "0.2.9",[m
[31m-            "uglifyjs-webpack-plugin": "0.4.6",[m
[31m-            "watchpack": "1.6.0",[m
[31m-            "webpack-sources": "1.4.3",[m
[31m-            "yargs": "8.0.2"[m
[32m+[m[32m            "acorn": "^5.0.0",[m
[32m+[m[32m            "acorn-dynamic-import": "^2.0.0",[m
[32m+[m[32m            "ajv": "^6.1.0",[m
[32m+[m[32m            "ajv-keywords": "^3.1.0",[m
[32m+[m[32m            "async": "^2.1.2",[m
[32m+[m[32m            "enhanced-resolve": "^3.4.0",[m
[32m+[m[32m            "escope": "^3.6.0",[m
[32m+[m[32m            "interpret": "^1.0.0",[m
[32m+[m[32m            "json-loader": "^0.5.4",[m
[32m+[m[32m            "json5": "^0.5.1",[m
[32m+[m[32m            "loader-runner": "^2.3.0",[m
[32m+[m[32m            "loader-utils": "^1.1.0",[m
[32m+[m[32m            "memory-fs": "~0.4.1",[m
[32m+[m[32m            "mkdirp": "~0.5.0",[m
[32m+[m[32m            "node-libs-browser": "^2.0.0",[m
[32m+[m[32m            "source-map": "^0.5.3",[m
[32m+[m[32m            "supports-color": "^4.2.1",[m
[32m+[m[32m            "tapable": "^0.2.7",[m
[32m+[m[32m            "uglifyjs-webpack-plugin": "^0.4.6",[m
[32m+[m[32m            "watchpack": "^1.4.0",[m
[32m+[m[32m            "webpack-sources": "^1.0.1",[m
[32m+[m[32m            "yargs": "^8.0.2"[m
           },[m
           "dependencies": {[m
             "source-map": {[m
[36m@@ -1009,7 +1009,7 @@[m
               "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-4.5.0.tgz",[m
               "integrity": "sha1-vnoN5ITexcXN34s9WRJQRJEvY1s=",[m
               "requires": {[m
[31m-                "has-flag": "2.0.0"[m
[32m+[m[32m                "has-flag": "^2.0.0"[m
               }[m
             }[m
           }[m
[36m@@ -1019,9 +1019,9 @@[m
           "resolved": "https://registry.npmjs.org/ws/-/ws-3.3.2.tgz",[m
           "integrity": "sha512-t+WGpsNxhMR4v6EClXS8r8km5ZljKJzyGhJf7goJz9k5Ye3+b5Bvno5rjqPuIBn5mnn5GBb7o8IrIWHxX1qOLQ==",[m
           "requires": {[m
[31m-            "async-limiter": "1.0.1",[m
[31m-            "safe-buffer": "5.1.2",[m
[31m-            "ultron": "1.1.1"[m
[32m+[m[32m            "async-limiter": "~1.0.0",[m
[32m+[m[32m            "safe-buffer": "~5.1.0",[m
[32m+[m[32m            "ultron": "~1.1.0"[m
           }[m
         },[m
         "y18n": {[m
[36m@@ -1039,19 +1039,19 @@[m
           "resolved": "https://registry.npmjs.org/yargs/-/yargs-8.0.2.tgz",[m
           "integrity": "sha1-YpmpBVsc78lp/355wdkY3Osiw2A=",[m
           "requires": {[m
[31m-            "camelcase": "4.1.0",[m
[31m-            "cliui": "3.2.0",[m
[31m-            "decamelize": "1.2.0",[m
[31m-            "get-caller-file": "1.0.3",[m
[31m-            "os-locale": "2.1.0",[m
[31m-            "read-pkg-up": "2.0.0",[m
[31m-            "require-directory": "2.1.1",[m
[31m-            "require-main-filename": "1.0.1",[m
[31m-            "set-blocking": "2.0.0",[m
[31m-            "string-width": "2.1.1",[m
[31m-            "which-module": "2.0.0",[m
[31m-            "y18n": "3.2.1",[m
[31m-            "yargs-parser": "7.0.0"[m
[32m+[m[32m            "camelcase": "^4.1.0",[m
[32m+[m[32m            "cliui": "^3.2.0",[m
[32m+[m[32m            "decamelize": "^1.1.1",[m
[32m+[m[32m            "get-caller-file": "^1.0.1",[m
[32m+[m[32m            "os-locale": "^2.0.0",[m
[32m+[m[32m            "read-pkg-up": "^2.0.0",[m
[32m+[m[32m            "require-directory": "^2.1.1",[m
[32m+[m[32m            "require-main-filename": "^1.0.1",[m
[32m+[m[32m            "set-blocking": "^2.0.0",[m
[32m+[m[32m            "string-width": "^2.0.0",[m
[32m+[m[32m            "which-module": "^2.0.0",[m
[32m+[m[32m            "y18n": "^3.2.1",[m
[32m+[m[32m            "yargs-parser": "^7.0.0"[m
           }[m
         },[m
         "yargs-parser": {[m
[36m@@ -1059,7 +1059,7 @@[m
           "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-7.0.0.tgz",[m
           "integrity": "sha1-jQrELxbqVd69MyyvTEA4s+P139k=",[m
           "requires": {[m
[31m-            "camelcase": "4.1.0"[m
[32m+[m[32m            "camelcase": "^4.1.0"[m
           }[m
         }[m
       }[m
[36m@@ -1070,9 +1070,9 @@[m
       "integrity": "sha512-Zuj6b8TnKXi3q4ymac8EQfc3ea/uhLeCGThFqXeC8H9/raaH8ARPUTdId+XyGd03Z4In0/VjD2OYFcBF09fNLQ==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "@jest/source-map": "24.9.0",[m
[31m-        "chalk": "2.4.2",[m
[31m-        "slash": "2.0.0"[m
[32m+[m[32m        "@jest/source-map": "^24.9.0",[m
[32m+[m[32m        "chalk": "^2.0.1",[m
[32m+[m[32m        "slash": "^2.0.0"[m
       },[m
       "dependencies": {[m
         "slash": {[m
[36m@@ -1089,34 +1089,34 @@[m
       "integrity": "sha512-Fogg3s4wlAr1VX7q+rhV9RVnUv5tD7VuWfYy1+whMiWUrvl7U3QJSJyWcDio9Lq2prqYsZaeTv2Rz24pWGkJ2A==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "@jest/console": "24.9.0",[m
[31m-        "@jest/reporters": "24.9.0",[m
[31m-        "@jest/test-result": "24.9.0",[m
[31m-        "@jest/transform": "24.9.0",[m
[31m-        "@jest/types": "24.9.0",[m
[31m-        "ansi-escapes": "3.2.0",[m
[31m-        "chalk": "2.4.2",[m
[31m-        "exit": "0.1.2",[m
[31m-        "graceful-fs": "4.2.2",[m
[31m-        "jest-changed-files": "24.9.0",[m
[31m-        "jest-config": "24.9.0",[m
[31m-        "jest-haste-map": "24.9.0",[m
[31m-        "jest-message-util": "24.9.0",[m
[31m-        "jest-regex-util": "24.9.0",[m
[31m-        "jest-resolve": "24.9.0",[m
[31m-        "jest-resolve-dependencies": "24.9.0",[m
[31m-        "jest-runner": "24.9.0",[m
[31m-        "jest-runtime": "24.9.0",[m
[31m-        "jest-snapshot": "24.9.0",[m
[31m-        "jest-util": "24.9.0",[m
[31m-        "jest-validate": "24.9.0",[m
[31m-        "jest-watcher": "24.9.0",[m
[31m-        "micromatch": "3.1.10",[m
[31m-        "p-each-series": "1.0.0",[m
[31m-        "realpath-native": "1.1.0",[m
[31m-        "rimraf": "2.7.1",[m
[31m-        "slash": "2.0.0",[m
[31m-        "strip-ansi": "5.2.0"[m
[32m+[m[32m        "@jest/console": "^24.7.1",[m
[32m+[m[32m        "@jest/reporters": "^24.9.0",[m
[32m+[m[32m        "@jest/test-result": "^24.9.0",[m
[32m+[m[32m        "@jest/transform": "^24.9.0",[m
[32m+[m[32m        "@jest/types": "^24.9.0",[m
[32m+[m[32m        "ansi-escapes": "^3.0.0",[m
[32m+[m[32m        "chalk": "^2.0.1",[m
[32m+[m[32m        "exit": "^0.1.2",[m
[32m+[m[32m        "graceful-fs": "^4.1.15",[m
[32m+[m[32m        "jest-changed-files": "^24.9.0",[m
[32m+[m[32m        "jest-config": "^24.9.0",[m
[32m+[m[32m        "jest-haste-map": "^24.9.0",[m
[32m+[m[32m        "jest-message-util": "^24.9.0",[m
[32m+[m[32m        "jest-regex-util": "^24.3.0",[m
[32m+[m[32m        "jest-resolve": "^24.9.0",[m
[32m+[m[32m        "jest-resolve-dependencies": "^24.9.0",[m
[32m+[m[32m        "jest-runner": "^24.9.0",[m
[32m+[m[32m        "jest-runtime": "^24.9.0",[m
[32m+[m[32m        "jest-snapshot": "^24.9.0",[m
[32m+[m[32m        "jest-util": "^24.9.0",[m
[32m+[m[32m        "jest-validate": "^24.9.0",[m
[32m+[m[32m        "jest-watcher": "^24.9.0",[m
[32m+[m[32m        "micromatch": "^3.1.10",[m
[32m+[m[32m        "p-each-series": "^1.0.0",[m
[32m+[m[32m        "realpath-native": "^1.1.0",[m
[32m+[m[32m        "rimraf": "^2.5.4",[m
[32m+[m[32m        "slash": "^2.0.0",[m
[32m+[m[32m        "strip-ansi": "^5.0.0"[m
       },[m
       "dependencies": {[m
         "ansi-escapes": {[m
[36m@@ -1131,7 +1131,7 @@[m
           "integrity": "sha512-uWjbaKIK3T1OSVptzX7Nl6PvQ3qAGtKEtVRjRuazjfL3Bx5eI409VZSqgND+4UNnmzLVdPj9FqFJNPqBZFve4w==",[m
           "dev": true,[m
           "requires": {[m
[31m-            "glob": "7.1.4"[m
[32m+[m[32m            "glob": "^7.1.3"[m
           }[m
         },[m
         "slash": {[m
[36m@@ -1148,10 +1148,10 @@[m
       "integrity": "sha512-5A1QluTPhvdIPFYnO3sZC3smkNeXPVELz7ikPbhUj0bQjB07EoE9qtLrem14ZUYWdVayYbsjVwIiL4WBIMV4aQ==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "@jest/fake-timers": "24.9.0",[m
[31m-        "@jest/transform": "24.9.0",[m
[31m-        "@jest/types": "24.9.0",[m
[31m-        "jest-mock": "24.9.0"[m
[32m+[m[32m        "@jest/fake-timers": "^24.9.0",[m
[32m+[m[32m        "@jest/transform": "^24.9.0",[m
[32m+[m[32m        "@jest/types": "^24.9.0",[m
[32m+[m[32m        "jest-mock": "^24.9.0"[m
       }[m
     },[m
     "@jest/fake-timers": {[m
[36m@@ -1160,9 +1160,9 @@[m
       "integrity": "sha512-eWQcNa2YSwzXWIMC5KufBh3oWRIijrQFROsIqt6v/NS9Io/gknw1jsAC9c+ih/RQX4A3O7SeWAhQeN0goKhT9A==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "@jest/types": "24.9.0",[m
[31m-        "jest-message-util": "24.9.0",[m
[31m-        "jest-mock": "24.9.0"[m
[32m+[m[32m        "@jest/types": "^24.9.0",[m
[32m+[m[32m        "jest-message-util": "^24.9.0",[m
[32m+[m[32m        "jest-mock": "^24.9.0"[m
       }[m
     },[m
     "@jest/reporters": {[m
[36m@@ -1171,27 +1171,27 @@[m
       "integrity": "sha512-mu4X0yjaHrffOsWmVLzitKmmmWSQ3GGuefgNscUSWNiUNcEOSEQk9k3pERKEQVBb0Cnn88+UESIsZEMH3o88Gw==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "@jest/environment": "24.9.0",[m
[31m-        "@jest/test-result": "24.9.0",[m
[31m-        "@jest/transform": "24.9.0",[m
[31m-        "@jest/types": "24.9.0",[m
[31m-        "chalk": "2.4.2",[m
[31m-        "exit": "0.1.2",[m
[31m-        "glob": "7.1.4",[m
[31m-        "istanbul-lib-coverage": "2.0.5",[m
[31m-        "istanbul-lib-instrument": "3.3.0",[m
[31m-        "istanbul-lib-report": "2.0.8",[m
[31m-        "istanbul-lib-source-maps": "3.0.6",[m
[31m-        "istanbul-reports": "2.2.6",[m
[31m-        "jest-haste-map": "24.9.0",[m
[31m-        "jest-resolve": "24.9.0",[m
[31m-        "jest-runtime": "24.9.0",[m
[31m-        "jest-util": "24.9.0",[m
[31m-        "jest-worker": "24.9.0",[m
[31m-        "node-notifier": "5.4.3",[m
[31m-        "slash": "2.0.0",[m
[31m-        "source-map": "0.6.1",[m
[31m-        "string-length": "2.0.0"[m
[32m+[m[32m        "@jest/environment": "^24.9.0",[m
[32m+[m[32m        "@jest/test-result": "^24.9.0",[m
[32m+[m[32m        "@jest/transform": "^24.9.0",[m
[32m+[m[32m        "@jest/types": "^24.9.0",[m
[32m+[m[32m        "chalk": "^2.0.1",[m
[32m+[m[32m        "exit": "^0.1.2",[m
[32m+[m[32m        "glob": "^7.1.2",[m
[32m+[m[32m        "istanbul-lib-coverage": "^2.0.2",[m
[32m+[m[32m        "istanbul-lib-instrument": "^3.0.1",[m
[32m+[m[32m        "istanbul-lib-report": "^2.0.4",[m
[32m+[m[32m        "istanbul-lib-source-maps": "^3.0.1",[m
[32m+[m[32m        "istanbul-reports": "^2.2.6",[m
[32m+[m[32m        "jest-haste-map": "^24.9.0",[m
[32m+[m[32m        "jest-resolve": "^24.9.0",[m
[32m+[m[32m        "jest-runtime": "^24.9.0",[m
[32m+[m[32m        "jest-util": "^24.9.0",[m
[32m+[m[32m        "jest-worker": "^24.6.0",[m
[32m+[m[32m        "node-notifier": "^5.4.2",[m
[32m+[m[32m        "slash": "^2.0.0",[m
[32m+[m[32m        "source-map": "^0.6.0",[m
[32m+[m[32m        "string-length": "^2.0.0"[m
       },[m
       "dependencies": {[m
         "slash": {[m
[36m@@ -1214,9 +1214,9 @@[m
       "integrity": "sha512-/Xw7xGlsZb4MJzNDgB7PW5crou5JqWiBQaz6xyPd3ArOg2nfn/PunV8+olXbbEZzNl591o5rWKE9BRDaFAuIBg==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "callsites": "3.1.0",[m
[31m-        "graceful-fs": "4.2.2",[m
[31m-        "source-map": "0.6.1"[m
[32m+[m[32m        "callsites": "^3.0.0",[m
[32m+[m[32m        "graceful-fs": "^4.1.15",[m
[32m+[m[32m        "source-map": "^0.6.0"[m
       },[m
       "dependencies": {[m
         "source-map": {[m
[36m@@ -1233,9 +1233,9 @@[m
       "integrity": "sha512-XEFrHbBonBJ8dGp2JmF8kP/nQI/ImPpygKHwQ/SY+es59Z3L5PI4Qb9TQQMAEeYsThG1xF0k6tmG0tIKATNiiA==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "@jest/console": "24.9.0",[m
[31m-        "@jest/types": "24.9.0",[m
[31m-        "@types/istanbul-lib-coverage": "2.0.1"[m
[32m+[m[32m        "@jest/console": "^24.9.0",[m
[32m+[m[32m        "@jest/types": "^24.9.0",[m
[32m+[m[32m        "@types/istanbul-lib-coverage": "^2.0.0"[m
       }[m
     },[m
     "@jest/test-sequencer": {[m
[36m@@ -1244,10 +1244,10 @@[m
       "integrity": "sha512-6qqsU4o0kW1dvA95qfNog8v8gkRN9ph6Lz7r96IvZpHdNipP2cBcb07J1Z45mz/VIS01OHJ3pY8T5fUY38tg4A==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "@jest/test-result": "24.9.0",[m
[31m-        "jest-haste-map": "24.9.0",[m
[31m-        "jest-runner": "24.9.0",[m
[31m-        "jest-runtime": "24.9.0"[m
[32m+[m[32m        "@jest/test-result": "^24.9.0",[m
[32m+[m[32m        "jest-haste-map": "^24.9.0",[m
[32m+[m[32m        "jest-runner": "^24.9.0",[m
[32m+[m[32m        "jest-runtime": "^24.9.0"[m
       }[m
     },[m
     "@jest/transform": {[m
[36m@@ -1256,21 +1256,21 @@[m
       "integrity": "sha512-TcQUmyNRxV94S0QpMOnZl0++6RMiqpbH/ZMccFB/amku6Uwvyb1cjYX7xkp5nGNkbX4QPH/FcB6q1HBTHynLmQ==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "@babel/core": "7.6.0",[m
[31m-        "@jest/types": "24.9.0",[m
[31m-        "babel-plugin-istanbul": "5.2.0",[m
[31m-        "chalk": "2.4.2",[m
[31m-        "convert-source-map": "1.6.0",[m
[31m-        "fast-json-stable-stringify": "2.0.0",[m
[31m-        "graceful-fs": "4.2.2",[m
[31m-        "jest-haste-map": "24.9.0",[m
[31m-        "jest-regex-util": "24.9.0",[m
[31m-        "jest-util": "24.9.0",[m
[31m-        "micromatch": "3.1.10",[m
[31m-        "pirates": "4.0.1",[m
[31m-        "realpath-native": "1.1.0",[m
[31m-        "slash": "2.0.0",[m
[31m-        "source-map": "0.6.1",[m
[32m+[m[32m        "@babel/core": "^7.1.0",[m
[32m+[m[32m        "@jest/types": "^24.9.0",[m
[32m+[m[32m        "babel-plugin-istanbul": "^5.1.0",[m
[32m+[m[32m        "chalk": "^2.0.1",[m
[32m+[m[32m        "convert-source-map": "^1.4.0",[m
[32m+[m[32m        "fast-json-stable-stringify": "^2.0.0",[m
[32m+[m[32m        "graceful-fs": "^4.1.15",[m
[32m+[m[32m        "jest-haste-map": "^24.9.0",[m
[32m+[m[32m        "jest-regex-util": "^24.9.0",[m
[32m+[m[32m        "jest-util": "^24.9.0",[m
[32m+[m[32m        "micromatch": "^3.1.10",[m
[32m+[m[32m        "pirates": "^4.0.1",[m
[32m+[m[32m        "realpath-native": "^1.1.0",[m
[32m+[m[32m        "slash": "^2.0.0",[m
[32m+[m[32m        "source-map": "^0.6.1",[m
         "write-file-atomic": "2.4.1"[m
       },[m
       "dependencies": {[m
[36m@@ -1292,9 +1292,9 @@[m
           "integrity": "sha512-TGHFeZEZMnv+gBFRfjAcxL5bPHrsGKtnb4qsFAws7/vlh+QfwAaySIw4AXP9ZskTTh5GWu3FLuJhsWVdiJPGvg==",[m
           "dev": true,[m
           "requires": {[m
[31m-            "graceful-fs": "4.2.2",[m
[31m-            "imurmurhash": "0.1.4",[m
[31m-            "signal-exit": "3.0.2"[m
[32m+[m[32m            "graceful-fs": "^4.1.11",[m
[32m+[m[32m            "imurmurhash": "^0.1.4",[m
[32m+[m[32m            "signal-exit": "^3.0.2"[m
           }[m
         }[m
       }[m
[36m@@ -1305,9 +1305,9 @@[m
       "integrity": "sha512-XKK7ze1apu5JWQ5eZjHITP66AX+QsLlbaJRBGYr8pNzwcAE2JVkwnf0yqjHTsDRcjR0mujy/NmZMXw5kl+kGBw==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "@types/istanbul-lib-coverage": "2.0.1",[m
[31m-        "@types/istanbul-reports": "1.1.1",[m
[31m-        "@types/yargs": "13.0.2"[m
[32m+[m[32m        "@types/istanbul-lib-coverage": "^2.0.0",[m
[32m+[m[32m        "@types/istanbul-reports": "^1.1.1",[m
[32m+[m[32m        "@types/yargs": "^13.0.0"[m
       }[m
     },[m
     "@mrmlnc/readdir-enhanced": {[m
[36m@@ -1316,8 +1316,8 @@[m
       "integrity": "sha512-bPHp6Ji8b41szTOcaP63VlnbbO5Ny6dwAATtY6JTjh5N2OLrb5Qk/Th5cRkRQhkWCt+EJsYrNB0MiL+Gpn6e3g==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "call-me-maybe": "1.0.1",[m
[31m-        "glob-to-regexp": "0.3.0"[m
[32m+[m[32m        "call-me-maybe": "^1.0.1",[m
[32m+[m[32m        "glob-to-regexp": "^0.3.0"[m
       }[m
     },[m
     "@ng-bootstrap/ng-bootstrap": {[m
[36m@@ -1325,7 +1325,7 @@[m
       "resolved": "https://registry.npmjs.org/@ng-bootstrap/ng-bootstrap/-/ng-bootstrap-5.1.0.tgz",[m
       "integrity": "sha512-IYoKE1NMrIPbRV0077/uHOjdwPb3qyhHpbBXiMGjclkSm2GvKXNPIzgd3Vjon/lbKelHdAW4A/upUHN2VYUi3w==",[m
       "requires": {[m
[31m-        "tslib": "1.10.0"[m
[32m+[m[32m        "tslib": "^1.9.0"[m
       }[m
     },[m
     "@ngtools/webpack": {[m
[36m@@ -1347,7 +1347,7 @@[m
           "integrity": "sha512-Z9Yfa11F6B9Sg/BK9MnqnQ+aQYicPLtilXBp2yUtDt2JRCE0h26d33EnfO3ZxoNxG0T92OUucP3Ct7cpfkdFfw==",[m
           "dev": true,[m
           "requires": {[m
[31m-            "tslib": "1.10.0"[m
[32m+[m[32m            "tslib": "^1.9.0"[m
           }[m
         }[m
       }[m
[36m@@ -1357,7 +1357,7 @@[m
       "resolved": "https://registry.npmjs.org/@ngx-translate/core/-/core-11.0.1.tgz",[m
       "integrity": "sha512-nBCa1ZD9fAUY/3eskP3Lql2fNg8OMrYIej1/5GRsfcutx9tG/5fZLCv9m6UCw1aS+u4uK/vXjv1ctG/FdMvaWg==",[m
       "requires": {[m
[31m-        "tslib": "1.10.0"[m
[32m+[m[32m        "tslib": "^1.9.0"[m
       }[m
     },[m
     "@ngx-translate/http-loader": {[m
[36m@@ -1365,7 +1365,7 @@[m
       "resolved": "https://registry.npmjs.org/@ngx-translate/http-loader/-/http-loader-4.0.0.tgz",[m
       "integrity": "sha512-x8LumqydWD7eX9yQTAVeoCM9gFUIGVTUjZqbxdAUavAA3qVnk9wCQux7iHLPXpydl8vyQmLoPQR+fFU+DUDOMA==",[m
       "requires": {[m
[31m-        "tslib": "1.10.0"[m
[32m+[m[32m        "tslib": "^1.9.0"[m
       }[m
     },[m
     "@nodelib/fs.stat": {[m
[36m@@ -1386,7 +1386,7 @@[m
       "integrity": "sha512-MI4Xx6LHs4Webyvi6EbspgyAb4D2Q2VtnCQ1blOJcoLS6mVa8lNN2rkIy1CVxfTUpoyIbCTkXES1rLXztFD1lg==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "any-observable": "0.3.0"[m
[32m+[m[32m        "any-observable": "^0.3.0"[m
       }[m
     },[m
     "@schematics/angular": {[m
[36m@@ -1421,7 +1421,7 @@[m
           "integrity": "sha512-Z9Yfa11F6B9Sg/BK9MnqnQ+aQYicPLtilXBp2yUtDt2JRCE0h26d33EnfO3ZxoNxG0T92OUucP3Ct7cpfkdFfw==",[m
           "dev": true,[m
           "requires": {[m
[31m-            "tslib": "1.10.0"[m
[32m+[m[32m            "tslib": "^1.9.0"[m
           }[m
         }[m
       }[m
[36m@@ -1438,11 +1438,11 @@[m
       "integrity": "sha512-8fBo0UR2CcwWxeX7WIIgJ7lXjasFxoYgRnFHUj+hRvKkpiBJbxhdAPTCY6/ZKM0uxANFVzt4yObSLuTiTnazDA==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "@babel/parser": "7.6.0",[m
[31m-        "@babel/types": "7.6.1",[m
[31m-        "@types/babel__generator": "7.0.2",[m
[31m-        "@types/babel__template": "7.0.2",[m
[31m-        "@types/babel__traverse": "7.0.7"[m
[32m+[m[32m        "@babel/parser": "^7.1.0",[m
[32m+[m[32m        "@babel/types": "^7.0.0",[m
[32m+[m[32m        "@types/babel__generator": "*",[m
[32m+[m[32m        "@types/babel__template": "*",[m
[32m+[m[32m        "@types/babel__traverse": "*"[m
       }[m
     },[m
     "@types/babel__generator": {[m
[36m@@ -1451,7 +1451,7 @@[m
       "integrity": "sha512-NHcOfab3Zw4q5sEE2COkpfXjoE7o+PmqD9DQW4koUT3roNxwziUdXGnRndMat/LJNUtePwn1TlP4do3uoe3KZQ==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "@babel/types": "7.6.1"[m
[32m+[m[32m        "@babel/types": "^7.0.0"[m
       }[m
     },[m
     "@types/babel__template": {[m
[36m@@ -1460,8 +1460,8 @@[m
       "integrity": "sha512-/K6zCpeW7Imzgab2bLkLEbz0+1JlFSrUMdw7KoIIu+IUdu51GWaBZpd3y1VXGVXzynvGa4DaIaxNZHiON3GXUg==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "@babel/parser": "7.6.0",[m
[31m-        "@babel/types": "7.6.1"[m
[32m+[m[32m        "@babel/parser": "^7.1.0",[m
[32m+[m[32m        "@babel/types": "^7.0.0"[m
       }[m
     },[m
     "@types/babel__traverse": {[m
[36m@@ -1470,7 +1470,7 @@[m
       "integrity": "sha512-CeBpmX1J8kWLcDEnI3Cl2Eo6RfbGvzUctA+CjZUhOKDFbLfcr7fc4usEqLNWetrlJd7RhAkyYe2czXop4fICpw==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "@babel/types": "7.6.1"[m
[32m+[m[32m        "@babel/types": "^7.3.0"[m
       }[m
     },[m
     "@types/chai": {[m
[36m@@ -1485,7 +1485,7 @@[m
       "integrity": "sha512-ld/1hV5qcPRGuwlPdvRfvM3Ka/iofOk2pH4VkasK4b1JJP1LjNmWWn0LsISf6RRzyhVOvs93rb9tM09e+UuF8Q==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "@types/chai": "4.2.0"[m
[32m+[m[32m        "@types/chai": "*"[m
       }[m
     },[m
     "@types/concat-stream": {[m
[36m@@ -1494,7 +1494,7 @@[m
       "integrity": "sha1-OU2+C7X+5Gs42JZzXoto7yOQ0A0=",[m
       "dev": true,[m
       "requires": {[m
[31m-        "@types/node": "10.12.27"[m
[32m+[m[32m        "@types/node": "*"[m
       }[m
     },[m
     "@types/eslint-visitor-keys": {[m
[36m@@ -1515,7 +1515,7 @@[m
       "integrity": "sha1-yayFsqX9GENbjIXZ7LUObWyJP/g=",[m
       "dev": true,[m
       "requires": {[m
[31m-        "@types/node": "10.12.27"[m
[32m+[m[32m        "@types/node": "*"[m
       }[m
     },[m
     "@types/glob": {[m
[36m@@ -1524,9 +1524,9 @@[m
       "integrity": "sha512-1Bh06cbWJUHMC97acuD6UMG29nMt0Aqz1vF3guLfG+kHHJhy3AyohZFFxYk2f7Q1SQIrNwvncxAE0N/9s70F2w==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "@types/events": "3.0.0",[m
[31m-        "@types/minimatch": "3.0.3",[m
[31m-        "@types/node": "10.12.27"[m
[32m+[m[32m        "@types/events": "*",[m
[32m+[m[32m        "@types/minimatch": "*",[m
[32m+[m[32m        "@types/node": "*"[m
       }[m
     },[m
     "@types/istanbul-lib-coverage": {[m
[36m@@ -1541,7 +1541,7 @@[m
       "integrity": "sha512-3BUTyMzbZa2DtDI2BkERNC6jJw2Mr2Y0oGI7mRxYNBPxppbtEK1F66u3bKwU2g+wxwWI7PAoRpJnOY1grJqzHg==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "@types/istanbul-lib-coverage": "2.0.1"[m
[32m+[m[32m        "@types/istanbul-lib-coverage": "*"[m
       }[m
     },[m
     "@types/istanbul-reports": {[m
[36m@@ -1550,8 +1550,8 @@[m
       "integrity": "sha512-UpYjBi8xefVChsCoBpKShdxTllC9pwISirfoZsUa2AAdQg/Jd2KQGtSbw+ya7GPo7x/wAPlH6JBhKhAsXUEZNA==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "@types/istanbul-lib-coverage": "2.0.1",[m
[31m-        "@types/istanbul-lib-report": "1.1.1"[m
[32m+[m[32m        "@types/istanbul-lib-coverage": "*",[m
[32m+[m[32m        "@types/istanbul-lib-report": "*"[m
       }[m
     },[m
     "@types/jest": {[m
[36m@@ -1560,7 +1560,7 @@[m
       "integrity": "sha512-jcDDXdjTcrQzdN06+TSVsPPqxvsZA/5QkYfIZlq1JMw7FdP5AZylbOc+6B/cuDurctRe+MziUMtQ3xQdrbjqyQ==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "@types/jest-diff": "20.0.1"[m
[32m+[m[32m        "@types/jest-diff": "*"[m
       }[m
     },[m
     "@types/jest-diff": {[m
[36m@@ -1629,7 +1629,7 @@[m
       "integrity": "sha512-lwwgizwk/bIIU+3ELORkyuOgDjCh7zuWDFqRtPPhhVgq9N1F7CvLNKg1TX4f2duwtKQ0p044Au9r1PLIXHrIzQ==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "@types/yargs-parser": "13.1.0"[m
[32m+[m[32m        "@types/yargs-parser": "*"[m
       }[m
     },[m
     "@types/yargs-parser": {[m
[36m@@ -1645,10 +1645,10 @@[m
       "dev": true,[m
       "requires": {[m
         "@typescript-eslint/experimental-utils": "2.0.0",[m
[31m-        "eslint-utils": "1.4.2",[m
[31m-        "functional-red-black-tree": "1.0.1",[m
[31m-        "regexpp": "2.0.1",[m
[31m-        "tsutils": "3.17.1"[m
[32m+[m[32m        "eslint-utils": "^1.4.0",[m
[32m+[m[32m        "functional-red-black-tree": "^1.0.1",[m
[32m+[m[32m        "regexpp": "^2.0.1",[m
[32m+[m[32m        "tsutils": "^3.14.0"[m
       }[m
     },[m
     "@typescript-eslint/eslint-plugin-tslint": {[m
[36m@@ -1658,7 +1658,7 @@[m
       "dev": true,[m
       "requires": {[m
         "@typescript-eslint/experimental-utils": "2.0.0",[m
[31m-        "lodash.memoize": "4.1.2"[m
[32m+[m[32m        "lodash.memoize": "^4.1.2"[m
       }[m
     },[m
     "@typescript-eslint/experimental-utils": {[m
[36m@@ -1667,9 +1667,9 @@[m
       "integrity": "sha512-XGJG6GNBXIEx/mN4eTRypN/EUmsd0VhVGQ1AG+WTgdvjHl0G8vHhVBHrd/5oI6RRYBRnedNymSYWW1HAdivtmg==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "@types/json-schema": "7.0.3",[m
[32m+[m[32m        "@types/json-schema": "^7.0.3",[m
         "@typescript-eslint/typescript-estree": "2.0.0",[m
[31m-        "eslint-scope": "4.0.3"[m
[32m+[m[32m        "eslint-scope": "^4.0.0"[m
       }[m
     },[m
     "@typescript-eslint/parser": {[m
[36m@@ -1678,10 +1678,10 @@[m
       "integrity": "sha512-ibyMBMr0383ZKserIsp67+WnNVoM402HKkxqXGlxEZsXtnGGurbnY90pBO3e0nBUM7chEEOcxUhgw9aPq7fEBA==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "@types/eslint-visitor-keys": "1.0.0",[m
[32m+[m[32m        "@types/eslint-visitor-keys": "^1.0.0",[m
         "@typescript-eslint/experimental-utils": "2.0.0",[m
         "@typescript-eslint/typescript-estree": "2.0.0",[m
[31m-        "eslint-visitor-keys": "1.1.0"[m
[32m+[m[32m        "eslint-visitor-keys": "^1.0.0"[m
       }[m
     },[m
     "@typescript-eslint/typescript-estree": {[m
[36m@@ -1691,7 +1691,7 @@[m
       "dev": true,[m
       "requires": {[m
         "lodash.unescape": "4.0.1",[m
[31m-        "semver": "6.3.0"[m
[32m+[m[32m        "semver": "^6.2.0"[m
       }[m
     },[m
     "@webassemblyjs/ast": {[m
[36m@@ -1745,7 +1745,7 @@[m
       "dev": true,[m
       "requires": {[m
         "@webassemblyjs/ast": "1.8.5",[m
[31m-        "mamacro": "0.0.3"[m
[32m+[m[32m        "mamacro": "^0.0.3"[m
       }[m
     },[m
     "@webassemblyjs/helper-wasm-bytecode": {[m
[36m@@ -1772,7 +1772,7 @@[m
       "integrity": "sha512-aaCvQYrvKbY/n6wKHb/ylAJr27GglahUO89CcGXMItrOBqRarUMxWLJgxm9PJNuKULwN5n1csT9bYoMeZOGF3g==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "@xtuc/ieee754": "1.2.0"[m
[32m+[m[32m        "@xtuc/ieee754": "^1.2.0"[m
       }[m
     },[m
     "@webassemblyjs/leb128": {[m
[36m@@ -1894,8 +1894,8 @@[m
       "integrity": "sha512-E+iruNOY8VV9s4JEbe1aNEm6MiszPRr/UfcHMz0TQh1BXSxHK+ASV1R6W4HpjBhSeS+54PIsAMCBmwD06LLsqQ==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "jsonparse": "1.3.1",[m
[31m-        "through": "2.3.8"[m
[32m+[m[32m        "jsonparse": "^1.2.0",[m
[32m+[m[32m        "through": ">=2.2.7 <3"[m
       }[m
     },[m
     "abab": {[m
[36m@@ -1914,7 +1914,7 @@[m
       "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.7.tgz",[m
       "integrity": "sha512-Il80Qs2WjYlJIBNzNkK6KYqlVMTbZLXgHx2oT0pU/fjRHyEp+PEfEPY0R3WCwAGVOtauxh1hOxNgIf5bv7dQpA==",[m
       "requires": {[m
[31m-        "mime-types": "2.1.24",[m
[32m+[m[32m        "mime-types": "~2.1.24",[m
         "negotiator": "0.6.2"[m
       }[m
     },[m
[36m@@ -1929,7 +1929,7 @@[m
       "resolved": "https://registry.npmjs.org/acorn-dynamic-import/-/acorn-dynamic-import-2.0.2.tgz",[m
       "integrity": "sha1-x1K9IQvvZ5UBtsbLf8hPj0cVjMQ=",[m
       "requires": {[m
[31m-        "acorn": "4.0.13"[m
[32m+[m[32m        "acorn": "^4.0.3"[m
       },[m
       "dependencies": {[m
         "acorn": {[m
[36m@@ -1945,8 +1945,8 @@[m
       "integrity": "sha512-clfQEh21R+D0leSbUdWf3OcfqyaCSAQ8Ryq00bofSekfr9W8u1jyYZo6ir0xu9Gtcf7BjcHJpnbZH7JOCpP60A==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "acorn": "6.3.0",[m
[31m-        "acorn-walk": "6.2.0"[m
[32m+[m[32m        "acorn": "^6.0.1",[m
[32m+[m[32m        "acorn-walk": "^6.0.1"[m
       },[m
       "dependencies": {[m
         "acorn": {[m
[36m@@ -1987,7 +1987,7 @@[m
       "integrity": "sha512-salcGninV0nPrwpGNn4VTXBb1SOuXQBiqbrNXoeizJsHrsL6ERFM2Ne3JUSBWRE6aeNJI2ROP/WEEIDUiDe3cg==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "es6-promisify": "5.0.0"[m
[32m+[m[32m        "es6-promisify": "^5.0.0"[m
       }[m
     },[m
     "agentkeepalive": {[m
[36m@@ -1996,7 +1996,7 @@[m
       "integrity": "sha512-e0L/HNe6qkQ7H19kTlRRqUibEAwDK5AFk6y3PtMsuut2VAH6+Q4xZml1tNDJD7kSAyqmbG/K08K5WEJYtUrSlQ==",[m
       "dev": true,[m
       "requires": {[m
[31m-        "humanize-ms": "1.2.1"[m
[32m+[m[32m        "humanize-ms": "^1.2.1"[m
       }[m
     },[m
     "aggregate-error": {[m
[36m@@ -2005,8 +2005,8 @@[m
       "integrity": "sha1-iINE2tAiCnLjr1CQYRf0h3GSX6w=",[m
       "dev": true,[m
       "requires": {[m
[31m-        "clean-stack": "1.3.0",[m
[31m-        "indent-string": "3.2.0"[m
[32m+[m[32m        "clean-stack": "^1.0.0",[m
[32m+[m[32m        "indent-string": "^3.0.0"[m
       }[m
     },[m
     "ajv": {[m
[36m@@ -2014,10 +2014,10 @@[m
       "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.10.2.tgz",[m
       "integrity": "sha512-TXtUUEYHuaTEbLZWIKUr5pmBuhDLy+8KYtPYdcV8qC+pOZL+NKqYwvWSRrVXHn+ZmRRAu8vJTAznH7Oag6RVRw==",[m
       "requires": {[m
[31m-        "fast-deep-equal": "2.0.1",[m
[31m-        "fast-json-stable-stringify": "2.0.0",[m
[31m-        "json-schema-traverse": "0.4.1",[m
[31m-        "uri-js": "4.2.2"[m
[32m+[m[32m        "fast-deep-equal": "^2.0.1",[m
[32m+[m[32m        "fast-json-stable-stringify": "^2.0.0",[m
[32m+[m[32m        "json-schema-traverse": "^0.4.1",[m
[32m+[m[32m        "uri-js": "^4.2.2"[m
       }[m
     },[m
     "ajv-errors": {[m
[36m@@ -2036,9 +2036,9 @@[m
       "resolved": "https://registry.npmjs.org/align-text/-/align-text-0.1.4.tgz",[m
       "integrity": "sha1-DNkKVhCT810KmSVsIrcGlDP60Rc=",[m
       "requires": {[m
[31m-        "kind-of": "3.2.2",[m
[31m-        "longest": "1.0.1",[m
[31m-        "repeat-string": "1.6.1"[m
[32m+[m[32m        "kind-of": "^3.0.2",[m
[32m+[m[32m        "longest": "^1.0.1",[m
[32m+[m[32m        "repeat-string": "^1.5.2"[m
       },[m
       "dependencies": {[m
         "kind-of": {[m
[36m@@ -2046,7 +2046,7 @@[m
           "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",[m
           "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",[m
           "requires": {[m
[31m-            "is-buffer": "1.1.6"[m
[32m+[m[32m            "is-buffer": "^1.1.5"[m
           }[m
         }[m
       }[m
[36m@@ -2068,7 +2068,7 @@[m
       "integrity": "sha1-wNROkP/w+sleiyPwQ6zaf9HFHXw=",[m
       "dev": true,[m
       "requires": {[m
[31m-        "loader-utils": "0.2.17"[m
[32m+[m[32m        "loader-utils": "^0.2.15"[m
       }[m
     },[m
     "ansi": {[m
[36m@@ -2082,7 +2082,7 @@[m
       "integrity":