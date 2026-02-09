import { ProcessStep } from "@/types";

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 h-full w-0.5 bg-border lg:left-1/2" />

      {/* Timeline steps */}
      <div className="space-y-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative flex items-start gap-6 ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            {/* Step number circle */}
            <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background text-sm font-semibold text-primary lg:absolute lg:left-1/2 lg:-translate-x-1/2">
              {index + 1}
            </div>

            {/* Step content */}
            <div
              className={`flex-1 rounded-lg border border-border bg-card p-6 shadow-sm ${
                index % 2 === 0 ? "lg:text-right" : "lg:text-left"
              }`}
            >
              <h4 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                {step.description}
              </p>
              {step.duration && (
                <p className="text-xs font-medium text-primary">
                  {step.duration}
                </p>
              )}
            </div>

            {/* Spacer for alternating layout */}
            <div className="hidden flex-1 lg:block" />
          </div>
        ))}
      </div>
    </div>
  );
}
