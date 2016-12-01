/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './app.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/platform/platform';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from 'ionic-angular/components/nav/nav';
import * as import12 from '../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import13 from 'ionic-angular/navigation/view-controller';
import * as import14 from 'ionic-angular/navigation/nav-controller-base';
import * as import15 from 'ionic-angular/components/app/app';
import * as import16 from 'ionic-angular/config/config';
import * as import17 from 'ionic-angular/util/keyboard';
import * as import18 from '@angular/core/src/linker/element_ref';
import * as import19 from '@angular/core/src/zone/ng_zone';
import * as import20 from '@angular/core/src/linker/component_factory_resolver';
import * as import21 from 'ionic-angular/gestures/gesture-controller';
import * as import22 from 'ionic-angular/transitions/transition-controller';
import * as import23 from 'ionic-angular/navigation/deep-linker';
var renderType_MyApp_Host = null;
var _View_MyApp_Host0 = (function (_super) {
    __extends(_View_MyApp_Host0, _super);
    function _View_MyApp_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_MyApp_Host0, renderType_MyApp_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_MyApp_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_MyApp0(this.viewUtils, this.injector(0), this._appEl_0);
        this._MyApp_0_4 = new import3.MyApp(this.parentInjector.get(import8.Platform));
        this._appEl_0.initComponent(this._MyApp_0_4, [], compView_0);
        compView_0.create(this._MyApp_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_MyApp_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.MyApp) && (0 === requestNodeIndex))) {
            return this._MyApp_0_4;
        }
        return notFoundResult;
    };
    return _View_MyApp_Host0;
}(import1.AppView));
function viewFactory_MyApp_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_MyApp_Host === null)) {
        (renderType_MyApp_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_MyApp_Host0(viewUtils, parentInjector, declarationEl);
}
export var MyAppNgFactory = new import10.ComponentFactory('ng-component', viewFactory_MyApp_Host0, import3.MyApp);
var styles_MyApp = [];
var renderType_MyApp = null;
var _View_MyApp0 = (function (_super) {
    __extends(_View_MyApp0, _super);
    function _View_MyApp0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_MyApp0, renderType_MyApp, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_MyApp0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-nav', null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = import12.viewFactory_Nav0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Nav_0_4 = new import11.Nav(this.parentInjector.get(import13.ViewController, null), this.parentInjector.get(import14.NavControllerBase, null), this.parentInjector.get(import15.App), this.parentInjector.get(import16.Config), this.parentInjector.get(import17.Keyboard), new import18.ElementRef(this._el_0), this.parentInjector.get(import19.NgZone), this.renderer, this.parentInjector.get(import20.ComponentFactoryResolver), this.parentInjector.get(import21.GestureController), this.parentInjector.get(import22.TransitionController), this.parentInjector.get(import23.DeepLinker, null));
        this._appEl_0.initComponent(this._Nav_0_4, [], compView_0);
        compView_0.create(this._Nav_0_4, [], null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([], [this._el_0], [], []);
        return null;
    };
    _View_MyApp0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import11.Nav) && (0 === requestNodeIndex))) {
            return this._Nav_0_4;
        }
        return notFoundResult;
    };
    _View_MyApp0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this.context.rootPage;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._Nav_0_4.root = currVal_0;
            this._expr_0 = currVal_0;
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Nav_0_4.ngAfterViewInit();
            }
        }
    };
    return _View_MyApp0;
}(import1.AppView));
export function viewFactory_MyApp0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_MyApp === null)) {
        (renderType_MyApp = viewUtils.createRenderComponentType('/Users/MacBook/alarm/.tmp/app/app.component.ts class MyApp - inline template', 0, import9.ViewEncapsulation.None, styles_MyApp, {}));
    }
    return new _View_MyApp0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=app.component.ngfactory.js.map