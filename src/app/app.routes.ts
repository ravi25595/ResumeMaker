import { Routes } from '@angular/router';
import { BuildResumeComponent } from './build-resume/build-resume.component';
import { CareerComponent } from './onboarding/career/career.component';
import { HistoryComponent } from './onboarding/history/history.component';
import { TargetCountryComponent } from './onboarding/target-country/target-country.component';
import { IndustryComponent } from './onboarding/industry/industry.component';
import { ChooseTemplateComponent } from './choose-template/choose-template.component';
import { Template1Component } from './Templates/template1/template1.component';
import { Template2Component } from './Templates/template2/template2.component';
import { EditorComponent } from './editor/editor.component';
import { DownloadPageComponent } from './download-page/download-page.component';

export const routes: Routes = [
    { path: "", title: "How It works - Resume Now", component: BuildResumeComponent },
    { path: "career", title: "Work Force - Resume Now", component: CareerComponent },
    { path: "history", title: "Resume History - Resume Now", component: HistoryComponent },
    { path: "targetcountry", title: "Target Country - Resume Now", component: TargetCountryComponent },
    { path: "industry", title: "Industry - Resume Now", component: IndustryComponent },
    { path: "choose-template", title: "Choose Template - Resume Now", component: ChooseTemplateComponent },
    { path: "template-1", title: "Finalize Resume - Resume Now", component: Template1Component },
    { path: "template-2", title: "Finalize Resume - Resume Now", component: Template2Component },
    { path: "Editor", title: "Edit Resume - Resume Now", component: EditorComponent },
    { path: "Editor/:id", title: "Edit Resume - Resume Now", component: EditorComponent },
    { path: "download-page", title: "Download resume - Resume Now", component: DownloadPageComponent },
];
