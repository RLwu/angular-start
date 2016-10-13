/**
 * Created by 粒粒 on 2016/10/13.
 */

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//导入新的 AppComponent组件,并把它添加到 NgModule 装饰器中的 declarations 和 bootstrap 字段
import { AppComponent }   from './app.component';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
