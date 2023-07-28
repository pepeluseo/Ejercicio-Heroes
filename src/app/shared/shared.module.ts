import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsPoderosoPipe } from './pipes/es-poderoso.pipe';
import { HonorPipe } from './pipes/honor.pipe';



@NgModule({
  declarations: [
    EsPoderosoPipe,
    HonorPipe
  ],
  exports: [
    HonorPipe,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
