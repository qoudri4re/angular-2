import { Component, Input } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css'],
})
export class CustomButtonComponent {
  @Input() text!: string;
  @Input() buttonId!: string;
  @Input() message!: string;

  constructor(private notificationService: NotificationService) {}

  buttonClick() {
    this.notificationService.btnClicked(this.message);
  }
}
