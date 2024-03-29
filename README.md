Angular 
--------------------------------------------------------------------------------------

    Pre-Requisites
    --------------------------------------------------

        HTML 5
            All html dom elements
            tables, lists, media, html-5 features validation attributes, geolocation, webstoreage ..etc.,

        CSS 3
            Styling
            css-properties tables, lists,forms, containers
            responsive layout
            css selectors

        JavaScript (ES6)
            lanaguage fundamentals
            JAvaScript buitlin classes and object
            OOPs classes, objects, methods, constructor
            JavaScript Functions funciton, arrow function, closure, callBack
            ES6 Syntaxes    tempalte literals, spred operator, default params, rest parmeters 
                            Promise, async and await keywords.
                            Module
    
        NodeJS

    Objectives
    ---------------------------------------------------
        TypeScript = JavaScript + types
        Angular Introduction
        Angular Components, directives, pipes , moduels
        Angular Forms
        RxJS - Observables
        HttpClient - restApi communication
        Angular Routing

    
    Angular Introduction
    ----------------------------------------------------------

        is a typescript based SPA framework.

        AngularJS

        Angular 2
        Angular 4
        .....

        Angular 15

    TypeScript
    --------------------------------------------------------------

        TypeScript = JavaScript + DataTypes

        Typescript is transpelled into javaScript

    Lab Setup
    --------------------------------------------------------------

        VSCode      IDE

        NodeJS      Development Platform    https://nodejs.org  (16.x to 18.x)  
                                            node --version

        Angular CLI PMT                     npm i -g @angular/cli@16.1.3
                                            ng version

    Why NodeJS?
    -----------------------------------------------------------------

        NodeJS is a alternate runtime for javascript.
        NodeJS is sued for javascript that doesn't need any UI.
        Browsers are sued for javascript tha needs UI.

        An application development involvs:
            compose                                 IDE                 VSCode
            compile/transpeelling                   compiler            tsc
            manage dependencies                     build tool          npm
            build and pack the app-bundle           build tool          npm
            test                                    testing lib         jasmine and karma
            deploy on to a server                   build tool/PMT      angular cli
            execution                               run-time            Browser

        NodeJS is used to execute the tools needed for developing the application.

    Angular Archetecture
    -------------------------------------------------------------------

        Each angular artifact is a class.
        Each of these classes are marked with decoraters to identify their roles.
        These artifacts have config., Abnd the config,. is passed as json object to the decorator and is called meta-data.

        Any angular app is made up of five main artifacts
            Modules
                @NgModule({
                    declarations:[],
                    imports:[],
                    exports:[],
                    providers:[],
                    bootstrap:[]
                })
                class SalesModule{

                }

            Directives
                @Directive({
                    selector:'[fastMovingStock]'
                })
                class FastMovingStockDirective{

                }

            Components
                @Component({
                    selector:'app-dashboard',
                    templateUrl:'',
                    styleUrls:[]
                })
                class DashboardComponent{

                }

            Pipes
                @Pipe({
                    name:'intoWord'
                })
                class InToWordsPipe{

                }

            Services
                @Injectable({
                    providedIn:'root'
                })
                class OrdersService{

                }


    Angular CLI

        Angular CLI is a frontier tool providd by angular team to mange the project structure and
        project development phases like creating, building, executing, teting ...etc.,

        ng version

        ng new app-name

        cd app-name

            ng g module ModuleName
            ng g c ComponentName    --skip-tests
            ng g directive DirectiveName --skip-tests
            ng g service ServiceName --skip-tests
            ng g pipe PipeName --skip-tests
            ng g interface InterfaceName
            ng g class ClassName
            ..etc.,

            ng build                will compile .ts into .js , package and put them in 'dist' folder
            ng serve                will build and hosts the package on development server on port 4200
            ng serve --port 8888    will build and hosts the package on development server on port 8888
            ng serve --port 8888 -o will build and hosts the package on development server on port 8888, launches the app on a browser
            ng test                 will build and invoke all the test cases.

    
    Angular Modules

        Angular Modules define the scope of access. Each angular module can group components, pipes, directives,
        service and other modules into them.

        Artifacts belonging to a specfic moduel have access to one another, but they wont have access to artifacts
        of other modules.

        A module (moduleA) can be imported into another module (moduleB) so that moduelB artifacts can access exported artifacts of moduleA.

        Each angular app must be mandatorily housed in one top-level module and is refered to as ROOT MODULE. AppModule is the default
        name for ROOT MODULE.

            @NgModule({
                declarations:[],        list of components, pipes and directive that are grouped under this module
                imports:[],             list of modules to be imported into this
                exports:[],             list of artifacts of this module that are allowed tobe accessed out side
                providers:[],           list of services that are manged by the injector of this module
                bootstrap:[]            list of components to be instantiaed immidiatly after loading this module
            })
            class SalesModule{

            }        

        meta-data of ROOT MODULE will not have 'exports' section
        meta-data of ROOT MODULE only has the 'bootstrap' section 

    Angular Directive and Components

        Angular offers html extandability as a feature. It means that we can create our own html elements and attributes in angular.

        Attribute Directive / Directive         are custom made attributes in angular

            @Directive({
                selector:'[fastMovingStock]'
            })
            class FastMovingStockDirective{

            }

            <div fastMovingStock="true">
                <!-- detials of stock items -->
            </div>

        Structural Directives                   are attribute directive that can control the rendering of an element.

            *ngIf
            *ngFor
            ngSwitch    *ngSwitchCase *ngSwtichDefault

        Component Directive / Components        are custom made elements/tags in angular

            Component   =   State & Behaviour           .component.ts
                                +
                            Html DOM Content            .component.html
                                +
                            Style                       .component.css


            dashboard.component.ts

                @Component({
                    selector:'app-dashboard',
                    templateUrl:'dashboard.component.html',
                    styleUrls:['dashboard.component.css']
                })
                class DashboardComponent{
                    
                    numberOfMessgesRead:number = 12;
                }

            dashboard.component.html
                <div class="dashboard">
                    You have {{numberOfMessgesRead}} messages read already.
                </div>

            dashboard.component.css
                .dashboard{
                    margin: 10px;
                    border: 1px solid black;
                }

            <app-dashboard></app-dashboard>

    Data Binding

        is about accessing the fields and the methods of component.ts file inside
        the component.html

        Interpolation
            is to bind an angular field or expression onto the content directly. Whenever,
            the field bound here has its valeu changed, the rendered content also gets
            updated automatically.

            <tagName> {{fieldOrAngularExpression}} </tagName>

        Two-Way Data Binding
            is to bind a field with an input-element, so that the input-element will show
            the value of the field initially and whenever the input-element is edited, the
            value of the field also is updated.

            we have to use ngModel attribute-directive defined in 'FormsModule' from '@angular/forms' for
            two-way binding.

            <input type="text" [(ngModel)]="userName" />

        One-Way Data Binding
            Attribute Data Binding
                is to bind a field with an attribute.

                <tagName attribute="value"></tagName>
                <tagName [attribute]="fieldOrAngularExpression"></tagName>

                <img src="abcd" />      <!-- abcd itself is the image url -->
                <img [src]="abcd" />    <!-- abcd is field that has the image url -->    

            Event Binding
                is to bind a method with an event.

                <tagName (event-driective)="method()"></tagName>

                html-event-attribute            event-directive
                ------------------------------------------------------------------
                    onSubmit                        ngSubmit
                    onClick                         click
                    onBlur                          blur
                    onFocus                         focus
                    onChange                        change
                    .....etc.,

            Style Binding
                is to bind a field with a css-property. 

                <tagName [style.cssProperty]="field"></tagName>

                field = {"css-property:angularExpression1,"css-property2":angularExpression2};
                <tagName [ngStyle]="field"></tagName>
                
            CSS Class Binding
                is to control if a css class is applied on an element or not.

                <tagName [class.className]="booleanExpression">
                </tagName>

                <tabName ngClass=" cssClass1 cssClass2 cssClass3 ">
                </tagName>

                myClasses: string = " cssClass1 cssClass2 cssClass3 ";
                <tagName [ngClass]="myClasses">
                </tagName>

                myClasses: string[] = ["cssClass1","cssClass2","cssClass3"];
                <tagName [ngClass]="myClasses">
                </tagName>

                myClasses= {cssClassName:true,cssClassName2:false};
                <tagName [ngClass]="myClasses">
                </tagName>

            Custom Directive

                <div fastMovingStock="true">
                    <!-- detials of stock items -->
                </div>

                <p fastMovingStock="true">
                    <!-- detials of stock items -->
                </p>

                @Directive({
                    selector:'[fastMovingStock]'
                })
                class FastMovingStockDirective{
                    //access the hostElement via ElementRef class
                    //@HostListner decorator to respond to the event that happen on the host-element.
                    //@Input decorator is sued to receive the data from a host-element in to attribute directive.
                }    

            Structural Directives

                ngIf

                    <ng-template [ngIf]="booleanExporession">
                        <p>This is a test para</p>
                    </ng-template>

                    <p *ngIf="booleanExporession">This is a test para</p>

                *ngFor

                    <ng-template [ngFor]="let ele of anArrray;index as i">
                        <p>{{ele}} is available at {{i}}</p>
                    </ng-template>

                    <p *ngFor="let ele of anArrray;index as i">{{ele}} is available at {{i}}</p>

                ngSwitch    *ngSwitchCase   *ngSwitchDefault        

                    <div [ngSwitch]="day">
                        <span *ngSwitchCase="1">Monday</span>
                        <span *ngSwitchCase="2">Tuesday</span>
                        <span *ngSwitchCase="3">Wednesday</span>
                        <span *ngSwitchCase="4">Thursday</span>
                        <span *ngSwitchCase="5">Friday</span>
                        <span *ngSwitchCase="6">Saturday</span>
                        <span *ngSwitchCase="7">Sunday</span>
                        <span *ngSwitchDefault>No Such Day</span>
                    </div>

    Angular Pipes

        a pipe is used tranform a value into another jsut before rendering.

            {{valueOrFieldOrExpression|pipeName:'pipeInputs'}}

            in-built
                lowercase
                uppercase
                titlecase
                number
                currency
                date
                ...etc.,

            custom pipe

                @Pipe({
                    name:'intoWord'
                })
                class InToWordsPipe implements PipeTransform {
                    transform(value:any):any {
                        //here goes the trnaformation code..
                        return transformedValue;
                    }
                }

    Angular Services

        a service is a injectable object carring bussiness logic or api calls.

    Integrating Angular With Bootstrap

        npm i bootstrap

        include the paths 
        node_modules/bootstrap/dist/css/bootstrap.min.css   in 'styles' section of angular.json
        node_modules/bootstrap/dist/js/bootstrap.min.js     in 'scripts' section of angular.json

    Angular Routing
        We can map urls one for each component and to laod one component at a time based on the url.

        RouterModule from '@angular/router'

            Routes              model       Route[]

            Route               model       {path:'',pathMatch:'full|startsWith',component:Componnet,redirect:''}

                                            For Example:
                                                {path:'abc',component:DashboardComponent}

                                                assuming port 8888

                                                http://localhost:8888/abc
                                                http://localhost:8888/abc/123
                                                http://localhost:8888/abc/xyz
                                                
                                                will result in loading DashboardComponent                                            
                                            
                                            For Example:
                                                {path:'abc',pathMatch:'full',component:DashboardComponent}

                                                assuming port 8888

                                                http://localhost:8888/abc
                                                
                                                will result in loading DashboardComponent

                                                http://localhost:8888/abc/123
                                                http://localhost:8888/abc/xyz
                                                
                                                will not work!

            router-outlet       component   this is used in the top-level component to reserve space for the router output.

            routerLink          directive   is used on 'a' tag instead of its 'href' attribute.

            routerLinkActive    directive   accepts a css-class and that css-class is applied only when that link is active.

            Router              service     navigateByUrl("/sales/dailyReport")
                                            navigate(['/sales','/dailyReport'])

            ActivatedRoute      service     used to extract data (like path parmeters/querystring..etc) from the current URL.

    Angular Forms

        Template Driven Form                        Model Driven Form
            FormsModule from '@angular/forms'               ReactiveFormsModule from '@angular/forms'
                ngForm                                                 FormGroup
                ngModel                                                FormControl
                                                                       formControlName

            Validation are limited                          Has an extensive Validation Framework, and
                                                            custom validators are simelessly supported
            
            used in simple context where not more           used in all complex and nested form and regular 
            than two input controls exist                   form senarios.

            Testing is difficult as the form                Testing is easy as the form is modeled in the TS class
            struture and behaviour are defined               and is only strucutred in the template
            in the template

                            Both ngForm and FormGroup support valid and invalid properties.

                            Both ngModel and FormControl support
                                                    touched and untouched
                                                    dirty and prestine
                                                    valid and invalid

        InBuilt Validators:
            Validators from '@angular/forms'
                offers
                        requried
                        min
                        max
                        minLength
                        maxLength
                        email
                        pattern

        Custom Validators:

            is any function that accepts an object of 'AbstractControl' and returns an object of ValidationErrors or null.

            customValidator(control:AbstractControl) : ValidationErrors | null {
                let isValid:boolean = true;

                //validation logic.
                    
                return isValid ? null : {"validatorName":true };
            }

    Assignment#1

        Create an angular SPA that does CRUD operation on 
        Employee
            id
            fullName
            basicPay
            dateOfJoining
            designation     ASSOCIATE / Jr ASSOCIATE / Sr ASSOCIATE / MANAGER

        Custome Validator to check that the dateOfJoining can not be a future date.

    Obsservable from 'rxjs'.

        Observable is an enchanced Promise.

        A Promise can emit only one value that too after the completion of the async job.
        An Observable cna emit any number of values while the async job is in progress.

        A Promise has to be subscribed using 'then()' method for the async job to start and
        only one subscription can happen.
        An Observable has to be subscribed using 'subscribe()' method for the async job to start and
        any number of subscriptions can happen.

        A Promie once subscribed can not be unsbscribed.
        An Observable can be unsubscribed using 'unsubscribe()' method.

        let bgJob = (resolve,reject) => {
            //resolve is used to signal completion and also to carry the end result.
            //rejct signals error 
        };

        let p = new Promise( bgJob );

        p.then(
            val => {/*success callback*/ },
            err => {/*error callback */}
        );

        let bgJob2 = observer => {
            //observer.next(val)    used to emit intermidiate reuslts while the job is in progress
            //observer.error(err)   used to signal error
            //observer.complete()   used to signal completion
        };

        let ob = new Observable( bgJob2 );

        ob.subscribe({
            next: val => {},
            error: err => {},
            complete: () => {}
        });

        Observale class has a method called 'pipe()' used to pipe operations on an existing observable to
        generate a new observable.

        let ob2 = ob1.pipe( operation1(),operation2() );

    Calling Rest-Api using HttpClient

        HttpClient is a service from HttpClientModule from '@angular/common/http'
            get(endPoint) : Observable
            post(endPoint,reqBody) : Observable
            put(endPoint,reqBody) : Observable
            delete(endPoint) : Observable

    Generating fake rest-api using json-server

        md adb-api
        cd adb-api
        npm init -y
        npm i json-server@0.17.4

        create a json file containing hypothetical data in the adb-api folder
            say adb-api/data.json

        include the start command in pakcge.json as below
            "start":"json-server --watch ./data.json --port 9999"

        npm start

    Content vs View

        All the DOM written inside the tmeplate of a component is called its view (ViewChildren or ViewChild).

        Anything written inside the <tagName></tagName> of a component is called its content (ContentChildren or ContentChild) .

            <app-component-a>  here goes the content </app-component-a>
    
    Angular Component or Directive Life Cycle Hooks

        constructor()                   gets invoked after the allocation of the object

        ngOnChanges(SimpelChanges)      gets invoked every time when the @Input() fields change 
        
        ngOnInit()                      gets invoked after the first render (only once)
        
        ngDoCheck()                     is used to detect and act upon changes that angular cannot
                                        detect on its own. incoekd after ngOnInit() for the first
                                        time and then after ngOnChanges().
        
            ngAfterContentInit()        gets invoked after the content is initialized
        
            ngAfterContentChecked()     gets invoked after the content is checked
        
            ngAfterViewInit()           gets invoked after the view is initialized
        
            ngAfterViewChecked()        gets invoked after the view is checked
        
        ngOnDestroy()                   gets invoked just before the Component is unloaded.

    Content Projection

        ng-content
        ng-container
        ng-template