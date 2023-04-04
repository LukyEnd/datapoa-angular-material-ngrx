import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { LoderStatus } from 'src/app/store/actions/loading.actions';
import { AppState } from 'src/app/store/state/app.state';
import * as MiniBusActions from '../../../store/actions/mini-bus.actions';
import {
  getLoader,
  getMiniBusError,
  getMiniBusSuccess,
} from '../../../store/selectors/mini-bus.selectors';
import { BusLineDetail } from '../../models/bus-line.model';
import { RouterId } from '../shared/router-id';

@Component({
  selector: 'app-mini-bus',
  templateUrl: './mini-bus.component.html',
  styleUrls: [
    './mini-bus.component.scss',
    '../shared/css-base/css-base.component.scss',
  ],
})
export class MiniBusComponent extends RouterId implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  public displayedColumns: string[] = ['id', 'codigo', 'nome', 'itinerario'];
  public myControl = new FormControl();
  public dataSource!: MatTableDataSource<any>;
  public miniBusLine$: Observable<BusLineDetail[]>;
  public miniBusError$: Observable<string>;
  public miniBusError!: string;
  public isLoading$: Observable<boolean>;
  public subscription: Subscription[] = [];

  constructor(public router: Router, private store: Store<AppState>) {
    super(router);
    this.miniBusLine$ = this.store.select(getMiniBusSuccess);
    this.miniBusError$ = this.store.select(getMiniBusError);
    this.isLoading$ = this.store.select(getLoader);
  }

  public ngOnInit(): void {
    this.actionsPageInitial();
    this.dataMiniBus();
  }

  public ngOnDestroy(): void {
    this.subscription.forEach((interrupted) => interrupted.unsubscribe());
  }

  public actionsPageInitial(): void {
    this.store.dispatch(LoderStatus());
    this.store.dispatch(MiniBusActions.MiniBuss());
  }

  public dataMiniBus(): void {
    this.subscription.push(
      this.miniBusLine$.subscribe((busLine) => {
        this.dataSource = new MatTableDataSource(busLine);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    );
    this.subscription.push(
      this.miniBusError$.subscribe((error) => {
        this.miniBusError = error;
      })
    );
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
