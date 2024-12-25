"use client";

import { ArrowRight, Database, Globe, Lock, Rocket, Server, Shield } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

  const architectureComponents = [
    {
      title: "Frontend Architecture",
      icon: <Globe className="w-12 h-12 text-blue-500" />,
      description: "Modern, Type-Safe Frontend Stack",
      details: [
        "Next.js 14 with App Router for optimal performance and SEO",
        "TypeScript for type safety and better developer experience",
        "Tailwind CSS for responsive and maintainable styling",
        "shadcn/ui for beautiful, accessible components",
        "React Query for efficient server state management",
        "Zustand for lightweight client state management"
      ],
      structure: [
        {
          name: "src/",
          children: [
            {
              name: "components/",
              children: [
                "ui/Button.tsx",
                "ui/Card.tsx",
                "layout/Navbar.tsx",
                "layout/Sidebar.tsx",
                "forms/InputField.tsx",
                "forms/SelectField.tsx"
              ]
            },
            {
              name: "hooks/",
              children: ["useForm.ts", "useAuth.ts", "useTheme.ts"]
            },
            {
              name: "styles/",
              children: ["globals.css", "components.css"]
            },
            {
              name: "utils/",
              children: ["validation.ts", "formatting.ts"]
            }
          ]
        }
      ]
    },
    {
      title: "Backend Architecture",
      icon: <Server className="w-12 h-12 text-green-500" />,
      description: "Robust and Scalable Backend",
      details: [
        "Next.js API Routes for serverless backend functionality",
        "tRPC for end-to-end type safety",
        "Prisma as type-safe ORM",
        "PostgreSQL for reliable data storage",
        "Redis for caching and real-time features",
        "WebSocket support for real-time updates"
      ],
      structure: [
        {
          name: "src/",
          children: [
            {
              name: "server/",
              children: [
                "api/routes/",
                "controllers/",
                "middleware/",
                "services/",
                "validation/"
              ]
            },
            {
              name: "db/",
              children: ["schema.prisma", "migrations/", "seeds/"]
            },
            {
              name: "config/",
              children: ["database.ts", "redis.ts", "websocket.ts"]
            }
          ]
        }
      ]
    },
    {
      title: "Database Design",
      icon: <Database className="w-12 h-12 text-purple-500" />,
      description: "Scalable Data Architecture",
      details: [
        "PostgreSQL for ACID compliance and reliability",
        "Advanced indexing strategies for performance",
        "Materialized views for complex reporting",
        "Partitioning for large datasets",
        "Row-Level Security for data isolation",
        "Full-text search capabilities"
      ],
      structure: [
        {
          name: "prisma/",
          children: [
            {
              name: "migrations/",
              children: [
                "001_init_schema.sql",
                "002_add_indexes.sql",
                "003_add_views.sql"
              ]
            },
            {
              name: "seeds/",
              children: ["seed.ts", "test_data.ts"]
            },
            "schema.prisma",
            "dbml/schema.dbml"
          ]
        }
      ]
    },
    {
      title: "Security Features",
      icon: <Shield className="w-12 h-12 text-red-500" />,
      description: "Enterprise-Grade Security",
      details: [
        "NextAuth.js for authentication",
        "Role-Based Access Control (RBAC)",
        "API rate limiting and protection",
        "Data encryption at rest and in transit",
        "Regular security audits",
        "GDPR compliance features"
      ],
      structure: [
        {
          name: "src/",
          children: [
            {
              name: "auth/",
              children: [
                "providers/",
                "middleware.ts",
                "session.ts",
                "permissions.ts"
              ]
            },
            {
              name: "security/",
              children: [
                "encryption.ts",
                "rateLimit.ts",
                "audit.ts",
                "gdpr.ts"
              ]
            },
            {
              name: "policies/",
              children: ["rbac.ts", "acl.ts"]
            }
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Sanskriti   Modern ERP Architecture
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Built with Next.js, TypeScript, and PostgreSQL for scalability, performance, and developer productivity
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {architectureComponents.map((component, index) => (
            <div
              key={component.title}
              className={`relative overflow-hidden rounded-lg p-6 bg-white dark:bg-gray-800 shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer ${activeSection === index ? "ring-2 ring-blue-500" : ""
                }`}
              onClick={() => setActiveSection(index)}
            >
              <div className="flex items-center justify-center mb-4">
                {component.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white text-center mb-2">
                {component.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-300 text-center mb-4">
                {component.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {architectureComponents[activeSection].title} Details
          </h2>
          <ul className="space-y-4">
            {architectureComponents[activeSection].details.map((detail, index) => (
              <li key={index} className="flex items-center space-x-3">
                <ArrowRight className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700 dark:text-gray-200">{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Project Structure
          </h2>
          <div className="font-mono text-sm">
            {architectureComponents[activeSection].structure.map((folder) => (
              <div key={folder.name} className="space-y-2">
                <div className="text-blue-500">📁 {folder.name}</div>
                {folder.children.map((child) => (
                  <div key={typeof child === 'string' ? child : child.name} className="ml-6">
                    {typeof child === "string" ? (
                      <div className="text-gray-700 dark:text-gray-300">📄 {child}</div>
                    ) : (
                      <>
                        <div className="text-blue-500">📁 {child.name}</div>
                        {child.children.map((subChild) => (
                          <div key={subChild} className="ml-6 text-gray-700 dark:text-gray-300">
                            📄 {subChild}
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
            <Rocket className="w-5 h-5 mr-2" />
            Ready for Enterprise
          </div>
        </div>
      </div>
    </div>
  );
}