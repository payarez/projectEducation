import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [PanelMenuModule],
  templateUrl: './aside.html',
  styleUrls: ['./aside.css']
})
export class Aside implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Gestión Académica',
        icon: 'pi pi-briefcase',
        items: [
          { label: 'Cursos', icon: 'pi pi-book', routerLink: '/courses' },
          { label: 'Módulos', icon: 'pi pi-clone', routerLink: '/modules' },
          { label: 'Lecciones', icon: 'pi pi-file', routerLink: '/lessons' }
        ]
      },
      {
        label: 'Usuarios y Matrículas',
        icon: 'pi pi-id-card',
        items: [
          { label: 'Docentes', icon: 'pi pi-user-plus', routerLink: '/teachers' },
          { label: 'Estudiantes', icon: 'pi pi-users', routerLink: '/students' },
          { label: 'Matrículas', icon: 'pi pi-pencil', routerLink: '/enrollments' }
        ]
      },
      {
        label: 'Actividades Académicas',
        icon: 'pi pi-folder-open',
        items: [
          { label: 'Entregas', icon: 'pi pi-upload', routerLink: '/submissions' },
          { label: 'Intentos', icon: 'pi pi-refresh', routerLink: '/attempts' },
          { label: 'Evaluaciones', icon: 'pi pi-check-circle', routerLink: '/assessments' }
        ]
      },
      {
        label: 'Foros y Comunidad',
        icon: 'pi pi-comments',
        items: [
          { label: 'Foros', icon: 'pi pi-comment', routerLink: '/forums' },
          { label: 'Posts', icon: 'pi pi-pencil', routerLink: '/posts' },
          { label: 'Tags', icon: 'pi pi-tag', routerLink: '/tags' },
          { label: 'CursoTag', icon: 'pi pi-tags', routerLink: '/coursetags' }
        ]
      },
      {
        label: 'Reportes y Tablero',
        icon: 'pi pi-chart-line',
        items: [
          { label: 'Progreso', icon: 'pi pi-chart-bar', routerLink: '/progress' },
          { label: 'Resumen de Calificaciones', icon: 'pi pi-star', routerLink: '/grade-summary' }
        ]
      }
    ];
  }
}
