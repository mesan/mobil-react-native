package com.testproject;

import android.widget.TextView;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

/**
 * Created by Thomas on 27.01.2016.
 */
public class TextViewManager extends SimpleViewManager<TextView> {
    @Override
    public String getName() {
        return "textView";
    }

    @Override
    protected TextView createViewInstance(ThemedReactContext reactContext) {
        return new TextView(reactContext);
    }
}
