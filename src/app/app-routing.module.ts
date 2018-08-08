import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './areas/home/home-view/home-view.component';
import { ChadwickComponent } from './views/chadwick/chadwick.component';
import { ChadwickStatsComponent } from './views/chadwick-stats/chadwick-stats.component';
import { ChadwickPlayerComparisonComponent } from './views/chadwick-player-comparison/chadwick-player-comparison.component';
import { PortfolioViewComponent } from './areas/portfolio/portfolio-view/portfolio-view.component';
import { AboutViewComponent } from './areas/about/about-view/about-view.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'about', component: AboutViewComponent },
  { path: 'home', component: HomeViewComponent },
  { path: 'portfolio', component: PortfolioViewComponent, children: [
      { path: 'chadwick', component: ChadwickComponent, children: [
          { path: 'overview', component: ChadwickStatsComponent },
          { path: 'player-comparison', component: ChadwickPlayerComparisonComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
