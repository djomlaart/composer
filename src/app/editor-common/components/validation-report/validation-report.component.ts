import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from "@angular/core";
import {ValidationResponse} from "../../../services/web-worker/json-schema/json-schema.service";

@Component({
    encapsulation: ViewEncapsulation.None,

    selector: "ct-validation-report",
    styleUrls: ["./validation-report.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <p *ngIf="!issues.errors.length && !issues.warnings.length">
            No issues found.
        </p>

        <p class="text-console-error" *ngFor="let error of issues.errors">
            {{ error.loc ? error.loc + ": " : ""}}
            {{ error.message }}
        </p>

        <p class="text-console-warning" *ngFor="let warning of issues.warnings">
            {{ warning.loc ? warning.loc + ": " : ""}}
            {{ warning.message }}
        </p>
    `
})
export class ValidationReportComponent {
    @Input()
    public issues: ValidationResponse;
}
