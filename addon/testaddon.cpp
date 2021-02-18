#include "napi.h"

Napi::String HelloWorld(Napi::CallbackInfo &info) {
    Napi::Env env = info.Env();
    return Napi::String::New(env, "Hello World");
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
    exports.Set("HelloWorld", Napi::Function::New(env, HelloWorld));
    return exports;
}

NODE_API_MODULE(testaddon, Init);