import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { CoreModule } from './core/core-module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { ChildModule } from './children/children.module';
//import { MemberModule } from './member/member.module';
import { AppRoutingModule, appRoutingProviders } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
        
    // 핵심 모듈을 로드한다.
    CoreModule.forRoot({nickName: 'Happy'}),
    SharedModule,

    ChildModule
    //,MemberModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
