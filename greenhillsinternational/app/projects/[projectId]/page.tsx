import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProjectDetailLayout from '@/app/components/ProjectDetailLayout';
import AlternatingSection from '@/app/components/AlternatingSection';
import { getProjectById, getAllProjects } from '@/app/lib/projectsData';

// Generate static params for all projects
export async function generateStaticParams() {
  const allProjects = getAllProjects();
  
  return allProjects.map((project) => ({
    projectId: project.id,
  }));
}

// Dynamic metadata for each project
export async function generateMetadata({
  params,
}: {
  params: Promise<{ projectId: string }>;
}): Promise<Metadata> {
  const { projectId } = await params;
  const project = getProjectById(projectId);

  if (!project) {
    return {
      title: 'Project Not Found | Green Hills International',
    };
  }

  return {
    title: `${project.title} | Green Hills International Projects`,
    description: project.overview.description || `${project.title} - A ${project.category} project by Green Hills International located in ${project.location}.`,
    keywords: [project.category, project.location, 'project', 'construction', 'green hills'],
    openGraph: {
      title: project.title,
      description: project.overview.description,
      type: 'website',
      images: [
        {
          url: project.heroImage?.src || '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

// Page component
export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  const project = getProjectById(projectId);

  // If project not found, show 404
  if (!project) {
    notFound();
  }

  return (
    <ProjectDetailLayout 
      title={project.title} 
      category={project.category} 
      location={project.location}
      heroImage={project.heroImage}
    >
      {/* Project Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-6 text-foreground">
              Project Overview
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {project.overview.description}
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {project.overview.stats.map((stat, index) => (
                <div key={index}>
                  <h3 className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-foreground text-xl font-serif">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Alternating Sections */}
      {project.sections.map((section, index) => (
        <AlternatingSection 
          key={index}
          title={section.title} 
          description={section.description} 
          imageSrc={section.imageSrc} 
          imageAlt={section.imageAlt} 
          reverse={section.reverse} 
        />
      ))}

      {/* Related Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-6 text-foreground">
              Services Delivered
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {project.servicesIntro}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {project.services.map((service, index) => (
                <div key={index} className="bg-background p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-serif mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ProjectDetailLayout>
  );
}
