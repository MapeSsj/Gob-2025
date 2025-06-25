function showProjectDetails(projectId) {

    const projectTitles = [
        "",
        "Sistema de Matriculas",
        "Sistema de Gestion de TI",
        "Aula Virtual",
        "Sistema de convenios de Practicas Pre Profesionales",
        "Plataforma de formación continua en línea para docentes y egresados"
    ];

    const projectDescriptions = [
        "",
        "Sistema web que permite a los estudiantes del I.E.S. Federal Alemana realizar su proceso de matrícula de forma autónoma, segura y completamente en línea.Funcionalidades principales:<br> ☼ Registro y verificación de estudiantes.<br>☼ Selección de cursos o unidades.<br> ☼ Confirmación y resumen de matrícula.<br> ☼ Disponible 24 / 7 con interfaz responsiva.",
        "Plataforma digital participativa para la gestión institucional de TI, que permite integrar la retroalimentación del personal docente, estudiantes y administrativos para la mejora continua. Funcionalidades principales:<br>☼ Registro de observaciones y sugerencias.<br>☼ Clasificación de entradas por usuario y categoría.<br>☼ Generación de reportes mensuales automatizados.<br>☼ Historial de acciones y seguimiento técnico.",
        "Aula virtual institucional diseñada para facilitar el acceso a clases, seguimiento académico y entrega de trabajos. Permite a los estudiantes y docentes gestionar el aprendizaje en línea. Funcionalidades principales:<br>☼ Subida de tareas y archivos por unidad.<br>☼ Consulta de calificaciones por asignatura.<br>☼ Seguimiento del progreso académico del estudiante.<br>☼ Interfaz amigable y adaptable a dispositivos móviles.",
        "Sistema de gestión de convenios para prácticas preprofesionales, orientado a registrar, evaluar y hacer seguimiento de experiencias formativas en empresas. Funcionalidades principales:<br>☼ Registro de convenios y empresas colaboradoras.<br>☼ Asignación de estudiantes y tutores responsables.<br>☼ Evaluación periódica del desempeño.<br>☼ Reportes por ciclo o periodo de prácticas.",
        "Plataforma en línea para la formación continua de docentes y egresados, con un catálogo de cursos enfocados en temáticas tecnológicas. Funcionalidades principales:<br>☼ Acceso a más de 10 cursos virtuales especializados.<br>☼ Registro y progreso por usuario.<br>☼ Evaluación y constancia por curso aprobado.<br>☼ Actualización continua de contenidos formativos."
    ];

    // Crear el modal dinámicamente
    const modalHTML = `
            <div class="modal fade" id="projectModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header bg-primary text-white">
                            <h5 class="modal-title">${projectTitles[projectId]}</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <img src="img/Proy${projectId}.jpg" class="img-fluid rounded" alt="${projectTitles[projectId]}">
                                </div>
                                <div class="col-md-6">
                                    <h4>Detalles del Proyecto</h4>
                                    <p>${projectDescriptions[projectId]}</p>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item"><strong>Presupuesto:</strong> $${(150 + projectId * 50).toLocaleString()} mil</li>
                                        <li class="list-group-item"><strong>Duración:</strong> ${9 + projectId} Semanas</li>
                                        <li class="list-group-item"><strong>Estado:</strong> <span class="badge bg-success">En ejecución</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <a href="proyecto${projectId}.html" class="btn btn-primary">Ver detalles completos</a>
                        </div>
                    </div>
                </div>
            </div>
            `;

    // Insertar el modal en el documento
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Mostrar el modal
    const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));
    projectModal.show();

    // Eliminar el modal cuando se cierre
    document.getElementById('projectModal').addEventListener('hidden.bs.modal', function () {
        this.remove();
    });
}