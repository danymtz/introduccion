import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoComponent } from './components/nuevo/nuevo.component';



@NgModule({
  declarations: [
    NuevoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [NuevoComponent]
})
export class FirstModuleModule { }
