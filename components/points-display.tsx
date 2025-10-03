import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins } from "lucide-react";
import type { CustomerPointsSummary } from "@/lib/types";

interface PointsDisplayProps {
  points: CustomerPointsSummary;
}

export function PointsDisplay({ points }: PointsDisplayProps) {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-3xl font-bold text-brand">
          Sunrise Points
        </h2>
        <div className="flex items-center gap-3 rounded-full bg-primary/10 px-6 py-3">
          <Coins className="h-6 w-6 text-primary" />
          <span className="font-serif text-3xl font-bold text-primary">
            {points.total_points}
          </span>
        </div>
      </div>

      <Card className="mt-6 border-2">
        <CardHeader>
          <CardTitle className="text-xl">Recent activities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {points.recent_activities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start justify-between border-b border-border pb-4 last:border-0 last:pb-0"
              >
                <div className="flex-1">
                  <p className="font-medium text-brand">
                    {activity.activity_description}
                  </p>
                  <p className="mt-1 text-sm text-description">
                    {new Date(activity.created_at).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <div className="ml-4 flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1">
                  <Coins className="h-4 w-4 text-primary" />
                  <span className="font-semibold text-primary">
                    +{activity.points}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
