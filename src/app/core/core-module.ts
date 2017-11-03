import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleComponent } from './title.component'
import { UserService, UserServiceConfig } from './user.service'

// 핵심 모듈을 애플리케이션 루트 모듈에 추가하기 위해 TItleComponent 를 선언하고 다시 외부로 노출 (Export) 하도록 선언

@NgModule({
    imports: [CommonModule],
    declarations: [TitleComponent],
    exports: [TitleComponent],
    providers: [UserService]
})
export class CoreModule
{
    // 생성자 부모 주입기에 핵심 모듈이 이미 생성됐는지 검사
    // 부모 주입기에 대한 의존성을 확인하이 휘새 @SkipSelf 장식자를 이용
    // 부모 주입기에 객체가 존재하는지 확인 한 후 실제 객체가 존재한다면 객체를 받기 위해 Optional 장식자를 이용
    // 만약 부모주입기에 이미 핵심 모듈이 생성되었다면 검사 후 에러가 발생시킴
    constructor(@Optional() @SkipSelf() parentModule: CoreModule)
    {
        if (parentModule)
        {
            throw new Error('CoreModule이 이미 로딩되었습니다.');
        }
    }

    static forRoot(config: UserServiceConfig): ModuleWithProviders
    {
        return {
            ngModule: CoreModule,
            providers: [
                { provide: UserServiceConfig, useValue: config }
            ]
        }
    }
}
