import { Component } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from "./pages/services/services.component";
import { ProposalComponent } from "./pages/proposal/proposal.component";
import { CaseStudiesComponent } from "./pages/case-studies/case-studies.component";
import { FaqPageComponent } from "./pages/faq-page/faq-page.component";
import { TeamPageComponent } from "./pages/team-page/team-page.component";
import { TestimonialsComponent } from "./pages/testimonials/testimonials.component";
import { ContactUsPageComponent } from "./pages/contact-us-page/contact-us-page.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, HomeComponent, ServicesComponent, ProposalComponent, CaseStudiesComponent, FaqPageComponent, TeamPageComponent, TestimonialsComponent, ContactUsPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'postivus';
}
