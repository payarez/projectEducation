import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [PanelMenuModule],
  templateUrl: './aside.html',
  styleUrls: ['./aside.css']
})
export class Aside {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Gestión Académica',
        icon: 'pi pi-briefcase',
        items: [
          { label: 'Cursos', icon: 'pi pi-book' },
          { label: 'Módulos', icon: 'pi pi-clone' },
          { label: 'Lecciones', icon: 'pi pi-file' }
        ]
      },
      {
        label: 'Usuarios y Matrículas',
        icon: 'pi pi-id-card',
        items: [
          { label: 'Docentes', icon: 'pi pi-user-plus' },
          { label: 'Estudiantes', icon: 'pi pi-users' },
          { label: 'Matrículas', icon: 'pi pi-pencil' }
        ]
      },
      {
        label: 'Actividades Académicas',
        icon: 'pi pi-folder-open',
        items: [
          { label: 'Entregas', icon: 'pi pi-upload' },
          { label: 'Intentos', icon: 'pi pi-refresh' },
          { label: 'Evaluaciones', icon: 'pi pi-check-circle' }
        ]
      },
      {
        label: 'Foros y Comunidad',
        icon: 'pi pi-comments',
        items: [
          { label: 'Foros', icon: 'pi pi-comment' },
          { label: 'Posts', icon: 'pi pi-pencil' },
          { label: 'Tags', icon: 'pi pi-tag' },
          { label: 'CursoTag', icon: 'pi pi-tags' }
        ]
      },
      {
        label: 'Reportes y Tablero',
        icon: 'pi pi-chart-line',
        items: [
          { label: 'Progreso', icon: 'pi pi-chart-bar' },
          { label: 'Resumen de Calificaciones', icon: 'pi pi-star' }
        ]
      }
    ];
  }
}
