
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserDetailsService } from './userDetailsService';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { userDetails } from './jsonData';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users
  title: string;
  url: string;
  created_at: number;
  author: string;
  dataSource;
  user;
  id;

  @ViewChild(MatSort) sort: MatSort;
  constructor(public userDetail: UserDetailsService, public dialog: MatDialog) { }

  displayTableData() {
    this.userDetail.UserDetails().subscribe(res => {
      console.log(res.hits)
      this.users = res.hits;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.sort = this.sort;
    }, err => {
      console.log(err);
    });

  }

  ngOnInit() {
    this.id = setInterval(() => {
      this.displayTableData();
    }, 10000);

  }

  displayedColumns: string[] = ['title', 'url', 'created_at', 'author'];

  editUser(user) {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '500px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      this.user = user;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: userDetails) { }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
