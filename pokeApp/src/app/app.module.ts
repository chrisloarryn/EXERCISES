import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {HomeComponent} from './components/home/home.component';
import {TarjetasComponent} from './components/tarjetas/tarjetas.component';
import {PokemonComponent} from './components/pokemon/pokemon.component';
import {SearchComponent} from './components/search/search.component';
import {LoadingComponent} from './components/shared/loading/loading.component';
import {NavbarComponent} from './components/shared/navbar/navbar.component';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
// Importar rutas
import {ROUTES} from './app.routes';
// Pipes
import {DomseguroPipe, FilterPipe, NoimagePipe, pipeUcwords} from './pipes';

import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TarjetasComponent,
    PokemonComponent,
    SearchComponent,
    LoadingComponent,
    NavbarComponent,
    NoimagePipe,
    DomseguroPipe,
    pipeUcwords,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatProgressBarModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
