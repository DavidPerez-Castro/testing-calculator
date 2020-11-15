import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiComponent } from './ui.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

/*describe('Ui - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});*/

describe('Ui Addition - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call addition method', () => {

    // Arrange
    let result = 0;
    component.operator1 = 3;
    component.operator2 = 2;

    // Act
    component.addition();
    result = component.result;

    // Assert
    expect(result).toBe(5);
 });

 it('should add operator1 and operator2 when i click the addition button ', () => {
  // Arrange 
  component.operator1 = 5.0;
  component.operator2 = 2.5;
  let additionButton = fixture.debugElement.query(By.css('.addition-button'));

  // Act
  //component.addition();
  //fixture.detectChanges();
  additionButton.triggerEventHandler('click', null);

  // Assert
  expect(component.result).toBe(7.5);

 });
 it('Should render sum in result', () => {
  // Arrange
  component.operator1 = 5;
  component.operator2 = 5;

  // Act
  component.addition();
  fixture.detectChanges();
  let de = fixture.debugElement.query(By.css('.result'));
  let el : HTMLElement = de.nativeElement;

  // Assert
  expect(el.innerText).toContain('10');
   
});

});

describe('Ui Substraction - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call substraction method', () => {

    // Arrange
    let result = 0;
    component.operator1 = 5;
    component.operator2 = 2;

    // Act
    component.substraction();
    result = component.result;

    // Assert
    expect(result).toBe(3);
 });

 it('should add operator1 and operator2 when i click the substraction button ', () => {
  // Arrange 
  component.operator1 = 5.0;
  component.operator2 = 2.5;
  let substractionButton = fixture.debugElement.query(By.css('.substraction-button'));

  // Act
  //component.addition();
  //fixture.detectChanges();
  substractionButton.triggerEventHandler('click', null);

  // Assert
  expect(component.result).toBe(2.5);

 }); 

 it('Should render subs in result', () => {
  // Arrange
  component.operator1 = 10;
  component.operator2 = 5;

  // Act
  component.substraction();
  fixture.detectChanges();
  let de = fixture.debugElement.query(By.css('.result'));
  let el : HTMLElement = de.nativeElement;

  // Assert
  expect(el.innerText).toContain('5');
   
}); 
});

describe('Ui Multiplication - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call multiplication method', () => {

    // Arrange
    let result = 0;
    component.operator1 = 5;
    component.operator2 = 2;

    // Act
    component.multiplication();
    result = component.result;

    // Assert
    expect(result).toBe(10);
 });

 it('should add operator1 and operator2 when i click the multiplication button ', () => {
  // Arrange 
  component.operator1 = 5.0;
  component.operator2 = 2.5;
  let multiplicationButton = fixture.debugElement.query(By.css('.multiplication-button'));

  // Act
  //component.addition();
  //fixture.detectChanges();
  multiplicationButton.triggerEventHandler('click', null);

  // Assert
  expect(component.result).toBe(12.5);

 });

 it('Should render mul in result', () => {
  // Arrange
  component.operator1 = 10;
  component.operator2 = 5;

  // Act
  component.multiplication();
  fixture.detectChanges();
  let de = fixture.debugElement.query(By.css('.result'));
  let el : HTMLElement = de.nativeElement;

  // Assert
  expect(el.innerText).toContain('50');
   
});
 
});

describe('Ui Division - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call division method', () => {

    // Arrange
    let result = 0;
    component.operator1 = 5;
    component.operator2 = 2;

    // Act
    component.division();
    result = component.result;

    // Assert
    expect(result).toBe(2.5);
 });
 
 it('should add operator1 and operator2 when i click the division button ', () => {
  // Arrange 
  component.operator1 = 8.0;
  component.operator2 = 2.5;
  let divisionButton = fixture.debugElement.query(By.css('.division-button'));

  // Act
  //component.addition();
  //fixture.detectChanges();
  divisionButton.triggerEventHandler('click', null);

  // Assert
  expect(component.result).toBe(3.2);

 });

 it('Should render div in result', () => {
  // Arrange
  component.operator1 = 10;
  component.operator2 = 5;

  // Act
  component.division();
  fixture.detectChanges();
  let de = fixture.debugElement.query(By.css('.result'));
  let el : HTMLElement = de.nativeElement;

  // Assert
  expect(el.innerText).toContain('2');
   
});

});

/*describe('Ui Exp - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('Should call exp method', () => {
    expect(component).toBeFalsy();
  });

  xit('Should render exp in TxtResult', () => {
    expect(component).toBeFalsy();
  });
});*/

/*describe('Ui Sqr - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('Should call sqr method', () => {
    expect(component).toBeFalsy();
  });

  xit('Should render sqr in TxtResult', () => {
    expect(component).toBeFalsy();
  });
});*/

/*describe('Ui Sqrt - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('Should call sqrt method', () => {
    expect(component).toBeFalsy();
  });

  xit('Should render sqrt in TxtResult', () => {
    expect(component).toBeFalsy();
  });
});*/
