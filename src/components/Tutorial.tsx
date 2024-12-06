import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

interface TutorialProps {
  title: string;
  completed: boolean;
  onToggle: () => void;
  videoUrl: string;
}

export default function Tutorial({ title, completed, onToggle, videoUrl }: TutorialProps) {
  return (
    <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={onToggle}
        className="mt-1 text-blue-600 hover:text-blue-700 focus:outline-none"
      >
        {completed ? (
          <CheckCircle2 className="w-6 h-6" />
        ) : (
          <Circle className="w-6 h-6" />
        )}
      </button>
      <div className="flex-1">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
        >
          Voir Tutoriel
        </a>
      </div>
    </div>
  );
}