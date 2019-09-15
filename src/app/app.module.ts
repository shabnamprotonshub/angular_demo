import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { AppComponent, DialogOverviewExampleDialog } from './app.component';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsService } from './userDetailsService';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent, DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule, MatTableModule, MatInputModule, BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule, MatNativeDateModule, MatSortModule,
    MatFormFieldModule, HttpClientModule, MatDialogModule, MatButtonModule
  ],
  providers: [UserDetailsService],
  bootstrap: [AppComponent],
  entryComponents: [DialogOverviewExampleDialog]
})
export class AppModule { }
