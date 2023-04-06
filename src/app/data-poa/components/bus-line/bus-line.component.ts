import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { LoderStatus } from 'src/app/store/actions/loading.actions';
import { getBusLineSuccess } from 'src/app/store/selectors/bus-line.selectors';
import { AppState } from 'src/app/store/state/app.state';
import * as BusActions from '../../../store/actions/bus-line.actions';
import {
  getBusLineError,
  getLoader,
} from '../../../store/selectors/bus-line.selectors';
import { BusLineDetail } from '../../models/bus-line.model';

@Component({
  selector: 'app-bus-line',
  templateUrl: './bus-line.component.html',
  styleUrls: [
    './bus-line.component.scss',
    '../shared/css-base/css-base.component.scss',
  ],
})
export class BusLineComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  public displayedColumns: string[] = ['id', 'codigo', 'nome', 'itinerario'];
  public myControl = new FormControl();
  public dataSource!: MatTableDataSource<any>;
  public busLine$: Observable<BusLineDetail[]>;
  public busLineError$: Observable<string>;
  public busLineError!: string;
  public isLoading$: Observable<boolean>;
  public subscription: Subscription[] = [];

  constructor(public router: Router, private store: Store<AppState>) {
    this.busLine$ = this.store.select(getBusLineSuccess);
    this.busLineError$ = this.store.select(getBusLineError);
    this.isLoading$ = this.store.select(getLoader);
  }

  public ngOnInit(): void {
    this.actionsPageInitial();
    this.dataLineBus();
  }

  public ngOnDestroy(): void {
    this.subscription.forEach((interrupted) => interrupted.unsubscribe());
  }

  public actionsPageInitial(): void {
    this.store.dispatch(LoderStatus());
    this.store.dispatch(BusActions.loadBusLines());
  }

  public dataLineBus(): void {
    this.subscription.push(
      this.busLine$.subscribe((busLine) => {
        this.dataSource = new MatTableDataSource(busLine);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    );
    this.subscription.push(
      this.busLineError$.subscribe((error) => {
        this.busLineError = error;
      })
    );
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public setNumberId(id: number): void {
    this.router.navigate(['/itinerary', id]).then((r) => {
      location.reload();
      return r;
    });
  }

  // public setNumberId(id: number): void {
  //   this.router.navigate(['/itinerary', id]).then((r) => {
  //     return r;
  //   });
  // }
}
