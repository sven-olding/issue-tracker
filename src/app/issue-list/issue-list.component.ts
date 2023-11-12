import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesService } from '../issues.service';
import { Issue } from '../issue';
import { ClarityModule } from '@clr/angular';

@Component({
  selector: 'app-issue-list',
  standalone: true,
  imports: [CommonModule, ClarityModule],
  templateUrl: './issue-list.component.html',
  styleUrl: './issue-list.component.css',
})
export class IssueListComponent implements OnInit {
  issues: Issue[] = [];
  constructor(private issueService: IssuesService) {}

  private getIssues() {
    this.issues = this.issueService.getPendingIssues();
  }

  ngOnInit(): void {
    this.getIssues();
  }
}
