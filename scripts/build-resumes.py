from __future__ import annotations

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    HRFlowable,
    KeepTogether,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)
from reportlab.lib.enums import TA_RIGHT


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "public" / "resume"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

ACCENT = colors.HexColor("#C2410C")
INK = colors.HexColor("#111827")
BODY = colors.HexColor("#273444")
MUTED = colors.HexColor("#64748B")
RULE = colors.HexColor("#FED7AA")
LINK = colors.HexColor("#1D4ED8")


RESUMES = {
    "pt-BR": {
        "filename": "bruno-da-cunha-felipe-curriculo-pt-br.pdf",
        "title": "Bruno Da Cunha Felipe - Currículo",
        "headline": "Desenvolvedor de Software | .NET | ASP.NET Core | C# | PHP | Cybersecurity",
        "location": "Bauru - SP, Brasil",
        "summary_title": "RESUMO",
        "summary": (
            "Desenvolvedor de software com experiência em aplicações web, APIs, sistemas legados, "
            "bancos de dados e infraestrutura. Atuação prática com .NET, C#, ASP.NET Core, PHP, "
            "Laravel, React e bancos relacionais, participando da modelagem, desenvolvimento, "
            "implantação e manutenção. Entusiasta de cybersecurity e pentest, com foco em criar "
            "soluções performáticas, seguras e alinhadas às necessidades do negócio."
        ),
        "skills_title": "COMPETÊNCIAS TÉCNICAS",
        "skills": [
            ("Backend & Frameworks", ".NET, C#, ASP.NET Core, PHP, Laravel, CodeIgniter, Node.js, Python, APIs RESTful"),
            ("Frontend & Mobile", "React.js, Vue.js, Blazor, TypeScript, JavaScript, Flutter, .NET MAUI, Android"),
            ("Bancos de Dados", "PostgreSQL, MySQL, SQL Server, PL/SQL, conversão de dados, backup e restore"),
            ("Cloud & DevOps", "AWS, Microsoft Azure, DigitalOcean, Cloudflare, Docker, TeamCity, GitHub Actions, GitLab CI/CD"),
            ("Segurança & Observabilidade", "Cybersecurity, Pentest Web, Kali Linux, Metasploit, OWASP, Sentry, monitoramento e logging"),
        ],
        "experience_title": "EXPERIÊNCIAS PROFISSIONAIS",
        "education_title": "FORMAÇÃO ACADÊMICA",
        "technology_label": "Tecnologias & Competências",
        "jobs": [
            {
                "date": "Junho de 2019 - Atual | Bauru - SP",
                "company": "SOS Soluções em TI",
                "role": "Desenvolvedor de Software",
                "bullets": [
                    "Desenvolvimento e evolução de software, integrações e soluções orientadas às necessidades da operação.",
                    "Atuação com regras de negócio, bancos de dados, manutenção de sistemas e suporte ao ciclo de entrega.",
                    "Análise de problemas em produção e desenvolvimento de correções com foco em estabilidade e continuidade.",
                ],
                "tech": ".NET, C#, SQL, APIs, sistemas corporativos, integração e manutenção de software",
            },
            {
                "date": "Julho de 2025 - Atual | Remoto",
                "company": "RASC - Rede de Assistência Social Cristã",
                "role": "Desenvolvedor Full Stack - Temporário",
                "bullets": [
                    "Desenvolvimento de aplicações web, APIs e soluções escaláveis utilizando Laravel e .NET.",
                    "Participação em arquitetura de sistemas, integrações, bancos de dados e APIs RESTful.",
                    "Uso de AWS e Microsoft Azure para deploy, escalabilidade, monitoramento e automação de ambientes.",
                    "Atuação desde a modelagem até a entrega e manutenção dos projetos.",
                ],
                "tech": "Laravel, .NET, APIs RESTful, AWS, Microsoft Azure, bancos relacionais, CI/CD e monitoramento",
            },
            {
                "date": "Outubro de 2025 - Atual | Remoto",
                "company": "Mega Bilheteria",
                "role": "Desenvolvedor Full Stack - Terceirizado",
                "bullets": [
                    "Desenvolvimento de funcionalidades e correções de bugs em aplicação web.",
                    "Migração e evolução incremental de sistema legado sem interromper a operação.",
                    "Colaboração em frontend, backend, banco de dados e ambiente containerizado.",
                ],
                "tech": "Laravel, React, Docker, PostgreSQL e modernização de sistemas legados",
            },
            {
                "date": "Junho de 2017 - Atual | Bauru - SP / Remoto",
                "company": "Projetos sob demanda",
                "role": "Desenvolvedor Full Stack",
                "bullets": [
                    "Desenvolvimento de aplicações e sistemas sob demanda para web, desktop e mobile.",
                    "Construção de soluções completas, da modelagem de dados à interface e implantação.",
                    "Atendimento direto a necessidades de clientes, manutenção e evolução contínua.",
                ],
                "tech": "Flutter, Laravel, CodeIgniter, PostgreSQL, MySQL, C#, Windows Forms, ASP.NET Core, .NET e Blazor",
            },
            {
                "date": "Setembro de 2015 - Junho de 2019 | Bauru e Região",
                "company": "SOS Soluções em TI",
                "role": "Analista de Suporte",
                "bullets": [
                    "Conversão de bancos de dados, implantação de software e treinamento de departamentos e setores.",
                    "Configuração de servidores, bancos de dados, PAF-ECF, SAT e sistema Android para mesas e comandas.",
                    "Administração da wiki da empresa e desenvolvimento de PL/SQL para correção de dados.",
                    "Análise e monitoramento da sincronia entre bancos de dados.",
                ],
                "tech": "PostgreSQL, PL/SQL, Android, implantação, treinamento, servidores e automação comercial",
            },
            {
                "date": "Agosto de 2011 - Agosto de 2015 | Bauru - SP",
                "company": "Ostecnologic Soluções em Informática",
                "role": "Analista de Suporte",
                "bullets": [
                    "Atendimento ao público por telefone, e-mail e software, com resolução de problemas em sistemas.",
                    "Consultas SQL e subconsultas DDL, DCL e DML; instalação de servidores PostgreSQL.",
                    "Backup, restore, recuperação de dados e elaboração de PL/SQL para correções.",
                    "Instalação e configuração de Windows Server, GNU/Linux CentOS, RDP e automação comercial.",
                    "Teste de software para validação de versões antes da entrega aos clientes.",
                ],
                "tech": "PostgreSQL, SQL, PL/SQL, Windows Server, Linux CentOS, RDP, backup e recuperação de dados",
            },
        ],
        "education": [
            (
                "2017",
                "UNESP - Universidade Estadual Paulista",
                "Aluno Especial - Mestrado em Mídia e Tecnologia",
                "Cognição e sistemas inteligentes, reconhecimento de padrões, inteligência artificial e redes neurais.",
            ),
            (
                "2016 - 2017",
                "Universidade do Sagrado Coração",
                "Desenvolvimento de Software para Web",
                "Especialização em tecnologia da informação e desenvolvimento de aplicações web.",
            ),
            (
                "2013 - 2015",
                "FATEC - Faculdade de Tecnologia de Bauru",
                "Tecnologia em Banco de Dados",
                "Vice-presidente da Empresa Júnior e iniciação científica em RFID.",
            ),
            (
                "2011 - 2012",
                "Senac Bauru",
                "Técnico em Informática",
                "Líder de classe durante os quatro semestres.",
            ),
        ],
    },
    "en": {
        "filename": "bruno-da-cunha-felipe-resume-en.pdf",
        "title": "Bruno Da Cunha Felipe - Resume",
        "headline": "Software Developer | .NET | ASP.NET Core | C# | PHP | Cybersecurity",
        "location": "Bauru - SP, Brazil",
        "summary_title": "SUMMARY",
        "summary": (
            "Software developer experienced in web applications, APIs, legacy systems, databases, "
            "and infrastructure. Hands-on background with .NET, C#, ASP.NET Core, PHP, Laravel, "
            "React, and relational databases across modeling, development, implementation, and "
            "maintenance. Cybersecurity and pentest enthusiast focused on reliable, secure, "
            "high-performance solutions aligned with business needs."
        ),
        "skills_title": "TECHNICAL SKILLS",
        "skills": [
            ("Backend & Frameworks", ".NET, C#, ASP.NET Core, PHP, Laravel, CodeIgniter, Node.js, Python, RESTful APIs"),
            ("Frontend & Mobile", "React.js, Vue.js, Blazor, TypeScript, JavaScript, Flutter, .NET MAUI, Android"),
            ("Databases", "PostgreSQL, MySQL, SQL Server, PL/SQL, data conversion, backup and restore"),
            ("Cloud & DevOps", "AWS, Microsoft Azure, DigitalOcean, Cloudflare, Docker, TeamCity, GitHub Actions, GitLab CI/CD"),
            ("Security & Observability", "Cybersecurity, Web Pentesting, Kali Linux, Metasploit, OWASP, Sentry, monitoring and logging"),
        ],
        "experience_title": "PROFESSIONAL EXPERIENCE",
        "education_title": "EDUCATION",
        "technology_label": "Technologies & Skills",
        "jobs": [
            {
                "date": "June 2019 - Present | Bauru - SP, Brazil",
                "company": "SOS Soluções em TI",
                "role": "Software Developer",
                "bullets": [
                    "Software development and evolution, integrations, and solutions driven by operational needs.",
                    "Work across business rules, databases, system maintenance, and the delivery lifecycle.",
                    "Production issue analysis and fixes focused on stability and business continuity.",
                ],
                "tech": ".NET, C#, SQL, APIs, business software, integrations, and software maintenance",
            },
            {
                "date": "July 2025 - Present | Remote",
                "company": "RASC - Christian Social Assistance Network",
                "role": "Full Stack Developer - Temporary",
                "bullets": [
                    "Development of web applications, APIs, and scalable solutions with Laravel and .NET.",
                    "System architecture, integrations, databases, and RESTful API development.",
                    "AWS and Microsoft Azure services for deployment, scalability, monitoring, and environment automation.",
                    "Participation from solution modeling through delivery and maintenance.",
                ],
                "tech": "Laravel, .NET, RESTful APIs, AWS, Microsoft Azure, relational databases, CI/CD, and monitoring",
            },
            {
                "date": "October 2025 - Present | Remote",
                "company": "Mega Bilheteria",
                "role": "Full Stack Developer - Contractor",
                "bullets": [
                    "Feature development and bug fixes in a web application.",
                    "Incremental migration and evolution of a legacy system without interrupting operations.",
                    "Collaboration across frontend, backend, database, and containerized environments.",
                ],
                "tech": "Laravel, React, Docker, PostgreSQL, and legacy system modernization",
            },
            {
                "date": "June 2017 - Present | Bauru - SP, Brazil / Remote",
                "company": "Independent Projects",
                "role": "Full Stack Developer",
                "bullets": [
                    "On-demand web, desktop, and mobile application development.",
                    "End-to-end solutions from data modeling through interface implementation and deployment.",
                    "Direct customer collaboration, maintenance, and continuous product evolution.",
                ],
                "tech": "Flutter, Laravel, CodeIgniter, PostgreSQL, MySQL, C#, Windows Forms, ASP.NET Core, .NET, and Blazor",
            },
            {
                "date": "September 2015 - June 2019 | Bauru Region, Brazil",
                "company": "SOS Soluções em TI",
                "role": "Support Analyst",
                "bullets": [
                    "Database conversion, software implementation, and training for departments and teams.",
                    "Server, database, PAF-ECF, SAT, and Android table and order system configuration.",
                    "Company wiki administration and PL/SQL development for data correction.",
                    "Analysis and monitoring of database synchronization.",
                ],
                "tech": "PostgreSQL, PL/SQL, Android, implementation, training, servers, and retail automation",
            },
            {
                "date": "August 2011 - August 2015 | Bauru - SP, Brazil",
                "company": "Ostecnologic Soluções em Informática",
                "role": "Support Analyst",
                "bullets": [
                    "Customer support by phone, e-mail, and support software, resolving system issues.",
                    "SQL queries and DDL, DCL, and DML subqueries; PostgreSQL server installation.",
                    "Database backup, restore, data recovery, and PL/SQL correction scripts.",
                    "Windows Server, GNU/Linux CentOS, RDP, and retail automation setup.",
                    "Software testing to validate releases before customer delivery.",
                ],
                "tech": "PostgreSQL, SQL, PL/SQL, Windows Server, Linux CentOS, RDP, backup, and data recovery",
            },
        ],
        "education": [
            (
                "2017",
                "UNESP - São Paulo State University",
                "Special Master Student - Media and Technology",
                "Cognition and intelligent systems, pattern recognition, artificial intelligence, and neural networks.",
            ),
            (
                "2016 - 2017",
                "Universidade do Sagrado Coração",
                "Web Software Development",
                "Graduate specialization in information technology and web application development.",
            ),
            (
                "2013 - 2015",
                "FATEC - Bauru Technology College",
                "Database Technology",
                "Vice president of the junior company and undergraduate research in RFID.",
            ),
            (
                "2011 - 2012",
                "Senac Bauru",
                "Computer Technology",
                "Class leader throughout all four semesters.",
            ),
        ],
    },
}


def section(title: str, styles: dict[str, ParagraphStyle]):
    return [
        Spacer(1, 4.2 * mm),
        Paragraph(title, styles["section"]),
        Spacer(1, 1.1 * mm),
        HRFlowable(width="100%", thickness=0.7, color=RULE, spaceAfter=2.8 * mm),
    ]


def job_story(job: dict, copy: dict, styles: dict[str, ParagraphStyle]):
    period, _, place = job["date"].partition(" | ")
    header = two_columns(
        [
            [Paragraph(job["company"], styles["company"])],
            [Paragraph(job["role"], styles["role"])],
        ],
        [
            [Paragraph(period, styles["date"])],
            [Paragraph(place, styles["place"])],
        ],
    )
    blocks = [header, Spacer(1, 1.2 * mm)]
    for bullet in job["bullets"]:
        blocks.append(Paragraph(bullet, styles["bullet"], bulletText="•"))
    blocks.append(Spacer(1, 0.6 * mm))
    blocks.append(
        Paragraph(
            f"<font name='Times-Bold' color='#273444'>{copy['technology_label']}:</font> {job['tech']}",
            styles["tech"],
        )
    )
    blocks.append(Spacer(1, 3.4 * mm))
    return KeepTogether(blocks)


def two_columns(left_rows, right_rows, left_width=None, right_width=None):
    """Tabela de 2 colunas sem bordas; cada coluna é uma lista de linhas (flowables)."""
    table = Table(
        [[left_rows, right_rows]],
        colWidths=[left_width or 118 * mm, right_width or 56 * mm],
    )
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    return table


def skills_table(rows, styles):
    table = Table(
        [
            [Paragraph(label, styles["skill_label"]), Paragraph(value, styles["skill"])]
            for label, value in rows
        ],
        colWidths=[41 * mm, 133 * mm],
    )
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("LEFTPADDING", (1, 0), (1, -1), 2 * mm),
                ("TOPPADDING", (0, 0), (-1, -1), 0.6 * mm),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0.6 * mm),
                ("LINEBELOW", (0, 0), (-1, -2), 0.3, RULE),
            ]
        )
    )
    return table


class ResumeDocTemplate(BaseDocTemplate):
    def __init__(self, filename: Path, metadata: dict):
        super().__init__(
            str(filename),
            pagesize=A4,
            rightMargin=18 * mm,
            leftMargin=18 * mm,
            topMargin=16 * mm,
            bottomMargin=12 * mm,
            title=metadata["title"],
            author="Bruno Da Cunha Felipe",
            subject="Software engineering professional experience and technical skills",
        )
        frame = Frame(
            self.leftMargin,
            self.bottomMargin,
            self.width,
            self.height,
            leftPadding=0,
            rightPadding=0,
            topPadding=0,
            bottomPadding=0,
        )
        self.addPageTemplates(PageTemplate(id="resume", frames=[frame], onPage=self._footer))

    @staticmethod
    def _footer(canvas, document):
        canvas.saveState()
        canvas.setFont("Times-Roman", 7.5)
        canvas.setFillColor(MUTED)
        canvas.drawCentredString(A4[0] / 2, 8 * mm, str(document.page))
        canvas.restoreState()


def build_styles():
    sample = getSampleStyleSheet()
    return {
        "name": ParagraphStyle(
            "ResumeName",
            parent=sample["Title"],
            fontName="Times-Bold",
            fontSize=22,
            leading=25,
            textColor=ACCENT,
            alignment=TA_CENTER,
            spaceAfter=4.5 * mm,
        ),
        "headline": ParagraphStyle(
            "ResumeHeadline",
            parent=sample["Normal"],
            fontName="Times-Bold",
            fontSize=10.4,
            leading=13,
            textColor=INK,
            alignment=TA_CENTER,
            spaceAfter=2.8 * mm,
        ),
        "contact": ParagraphStyle(
            "ResumeContact",
            parent=sample["Normal"],
            fontName="Times-Roman",
            fontSize=8.7,
            leading=12,
            textColor=MUTED,
            linkUnderline=True,
            alignment=TA_CENTER,
            spaceAfter=1.4 * mm,
        ),
        "section": ParagraphStyle(
            "ResumeSection",
            parent=sample["Heading2"],
            fontName="Times-Bold",
            fontSize=12.4,
            leading=14,
            textColor=ACCENT,
            alignment=TA_LEFT,
            spaceBefore=0,
            spaceAfter=0,
        ),
        "body": ParagraphStyle(
            "ResumeBody",
            parent=sample["BodyText"],
            fontName="Times-Roman",
            fontSize=9.4,
            leading=12.2,
            textColor=BODY,
            alignment=TA_LEFT,
            spaceAfter=2.2 * mm,
        ),
        "skill": ParagraphStyle(
            "ResumeSkill",
            parent=sample["BodyText"],
            fontName="Times-Roman",
            fontSize=8.8,
            leading=11.4,
            textColor=BODY,
            spaceBefore=0,
            spaceAfter=0,
        ),
        "skill_label": ParagraphStyle(
            "ResumeSkillLabel",
            parent=sample["BodyText"],
            fontName="Times-Bold",
            fontSize=8.8,
            leading=11.4,
            textColor=INK,
            spaceBefore=0,
            spaceAfter=0,
        ),
        "date": ParagraphStyle(
            "ResumeDate",
            parent=sample["BodyText"],
            fontName="Times-Bold",
            fontSize=9.2,
            leading=12,
            textColor=ACCENT,
            alignment=TA_RIGHT,
        ),
        "place": ParagraphStyle(
            "ResumePlace",
            parent=sample["BodyText"],
            fontName="Times-Italic",
            fontSize=8.8,
            leading=11.4,
            textColor=MUTED,
            alignment=TA_RIGHT,
        ),
        "company": ParagraphStyle(
            "ResumeCompany",
            parent=sample["BodyText"],
            fontName="Times-Bold",
            fontSize=10.8,
            leading=12.6,
            textColor=INK,
        ),
        "role": ParagraphStyle(
            "ResumeRole",
            parent=sample["BodyText"],
            fontName="Times-Italic",
            fontSize=9.8,
            leading=11.6,
            textColor=ACCENT,
        ),
        "bullet": ParagraphStyle(
            "ResumeBullet",
            parent=sample["BodyText"],
            fontName="Times-Roman",
            fontSize=9,
            leading=11.4,
            textColor=BODY,
            leftIndent=4 * mm,
            bulletIndent=0.8 * mm,
            bulletFontName="Times-Bold",
            bulletColor=ACCENT,
            spaceAfter=0.8 * mm,
        ),
        "tech": ParagraphStyle(
            "ResumeTech",
            parent=sample["BodyText"],
            fontName="Times-Italic",
            fontSize=8.7,
            leading=11,
            textColor=MUTED,
            leftIndent=4 * mm,
            spaceAfter=0,
        ),
        "edu_title": ParagraphStyle(
            "ResumeEduTitle",
            parent=sample["BodyText"],
            fontName="Times-Bold",
            fontSize=9.6,
            leading=11.8,
            textColor=INK,
            spaceBefore=0,
            spaceAfter=0.4 * mm,
        ),
        "edu_period": ParagraphStyle(
            "ResumeEduPeriod",
            parent=sample["BodyText"],
            fontName="Times-Bold",
            fontSize=9.2,
            leading=11.8,
            textColor=ACCENT,
            alignment=TA_RIGHT,
        ),
        "education": ParagraphStyle(
            "ResumeEducation",
            parent=sample["BodyText"],
            fontName="Times-Roman",
            fontSize=9,
            leading=11.6,
            textColor=BODY,
            spaceBefore=0,
            spaceAfter=0,
        ),
    }


def build_resume(locale: str, copy: dict):
    styles = build_styles()
    output = OUTPUT_DIR / copy["filename"]
    doc = ResumeDocTemplate(output, copy)

    story = [
        Paragraph("Bruno Da Cunha Felipe", styles["name"]),
        Paragraph(copy["headline"], styles["headline"]),
        Paragraph(
            (
                f'<font color="#C2410C">●</font>&nbsp;{copy["location"].replace(" ", "&nbsp;")}'
                f'&nbsp;&nbsp;|&nbsp;&nbsp;<a color="#1D4ED8" href="https://brunofelipe.dev">brunofelipe.dev</a>'
                f'&nbsp;&nbsp;|&nbsp;&nbsp;<a color="#1D4ED8" href="mailto:contato@brunofelipe.dev">contato@brunofelipe.dev</a>'
                f'&nbsp;&nbsp;|&nbsp;&nbsp;<a color="#1D4ED8" href="https://www.linkedin.com/in/brunodcfelipe/">linkedin.com/in/brunodcfelipe</a>'
            ),
            styles["contact"],
        ),
    ]

    story.extend(section(copy["summary_title"], styles))
    story.append(Paragraph(copy["summary"], styles["body"]))

    story.extend(section(copy["skills_title"], styles))
    story.append(skills_table(copy["skills"], styles))

    story.extend(section(copy["experience_title"], styles))
    for job in copy["jobs"]:
        story.append(job_story(job, copy, styles))

    story.extend(section(copy["education_title"], styles))
    for period, institution, course, description in copy["education"]:
        story.append(
            KeepTogether(
                [
                    two_columns(
                        [
                            [Paragraph(institution, styles["edu_title"])],
                            [Paragraph(f"{course}. {description}", styles["education"])],
                        ],
                        [[Paragraph(period, styles["edu_period"])]],
                        left_width=138 * mm,
                        right_width=36 * mm,
                    ),
                    Spacer(1, 2 * mm),
                ]
            )
        )

    doc.build(story)
    return output


if __name__ == "__main__":
    for resume_locale, resume_copy in RESUMES.items():
        path = build_resume(resume_locale, resume_copy)
        print(path)
