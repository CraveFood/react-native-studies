
package services.cravefood.react.toast;

import java.util.*;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import services.cravefood.react.toast.AndroidToast;


public class TorradeiraReactPackage implements ReactPackage {

    @Override
    public List<NativeModule> createNativeModules (ReactApplicationContext
                                                   reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new AndroidToast(reactContext));
        return modules;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        List<ViewManager> views = new ArrayList<>();
        return views;
    }

    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }
}
