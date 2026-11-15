import React from 'react';
import { OffTheRecordArt } from './OffTheRecordArt';
import { FeelSoGutArt } from './FeelSoGutArt';
import { TalesUnwrittenArt } from './TalesUnwrittenArt';
import { VRNursingArt } from './VRNursingArt';
import { PangNyataArt } from './PangNyataArt';
import { KoongyaRobloxArt } from './KoongyaRobloxArt';
import { GrowTheBallArt } from './GrowTheBallArt';

interface Props {
  projectId: string;
  variant?: 'hero' | 'card' | 'detailed';
  className?: string;
}

export const ArtworkRenderer: React.FC<Props> = ({ projectId, variant = 'card', className = '' }) => {
  switch (projectId) {
    case 'off-the-record':
      return <OffTheRecordArt variant={variant} className={className} />;
    case 'koongya-roblox':
      return <KoongyaRobloxArt variant={variant} className={className} />;
    case 'grow-the-ball':
      return <GrowTheBallArt variant={variant} className={className} />;
    case 'feel-so-gut':
      return <FeelSoGutArt variant={variant === 'hero' ? 'detailed' : variant} className={className} />;
    case 'tales-unwritten':
      return <TalesUnwrittenArt variant={variant === 'hero' ? 'detailed' : variant} className={className} />;
    case 'vr-nursing-simulation':
      return <VRNursingArt variant={variant === 'hero' ? 'detailed' : variant} className={className} />;
    case 'pang-nyata':
      return <PangNyataArt variant={variant === 'hero' ? 'detailed' : variant} className={className} />;
    default:
      return (
        <div className={`w-full h-full bg-[#181A20] flex items-center justify-center p-6 text-center ${className}`}>
          <div className="space-y-2">
            <div className="text-xs font-mono text-[#C5FA59]">CONCEPT ARTWORK</div>
            <div className="text-sm font-semibold text-[#F5F4F0]">{projectId}</div>
          </div>
        </div>
      );
  }
};
