import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesService } from '../issues.service';
import { Issue } from '../issue';
import { ClarityModule } from '@clr/angular';
import { IssueReportComponent } from '../issue-report/issue-report.component';

@Component({
  selector: 'app-issue-list',
  standalone: true,
  imports: [CommonModule, ClarityModule, IssueReportComponent],
  templateUrl: './issue-list.component.html',
  styleUrl: './issue-list.component.css',
})
export class IssueListComponent implements OnInit {
  issues: Issue[] = [];
  showReportIssue = false;

  constructor(private issueService: IssuesService) {}

  private getIssues() {
    this.issues = this.issueService.getPendingIssues();
  }

  onCloseReport() {
    this.showReportIssue = false;
    this.getIssues();
  }

  ngOnInit(): void {
    this.getIssues();
  }
}
