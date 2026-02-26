import { useEffect, useState } from 'react';
import Vapi from '@vapi-ai/web';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mic, Phone, PhoneOff, Loader2, Volume2 } from 'lucide-react';

// Initialize Vapi - in a real app, this should be in a context or service
// We use a public key from env, or a placeholder that will fail if not set
const vapi = new Vapi(import.meta.env.VITE_VAPI_PUBLIC_KEY || "your-public-key-here");

interface InterviewSimulatorProps {
  assistantId: string;
}

export function InterviewSimulator({ assistantId }: InterviewSimulatorProps) {
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Event listeners
    const onCallStart = () => {
      setIsSessionActive(true);
      setIsLoading(false);
      setError(null);
    };

    const onCallEnd = () => {
      setIsSessionActive(false);
      setIsLoading(false);
      setIsSpeaking(false);
    };

    const onSpeechStart = () => setIsSpeaking(true);
    const onSpeechEnd = () => setIsSpeaking(false);

    const onError = (e: any) => {
      console.error("Vapi error:", e);
      setError("Une erreur est survenue. Vérifiez votre clé API Vapi.");
      setIsLoading(false);
      setIsSessionActive(false);
    };

    vapi.on('call-start', onCallStart);
    vapi.on('call-end', onCallEnd);
    vapi.on('speech-start', onSpeechStart);
    vapi.on('speech-end', onSpeechEnd);
    vapi.on('error', onError);

    return () => {
      vapi.stop();
      vapi.removeAllListeners();
    };
  }, []);

  const startCall = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await vapi.start(assistantId);
    } catch (err) {
      console.error("Failed to start call", err);
      setError("Impossible de démarrer l'appel.");
      setIsLoading(false);
    }
  };

  const stopCall = () => {
    vapi.stop();
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-slate-900 text-white border-slate-800">
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-xl font-bold flex items-center justify-center gap-2">
          <Mic className="h-5 w-5 text-indigo-400" />
          Simulation d'Entretien IA
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-6 py-8">
        
        {/* Status Indicator */}
        <div className={`relative h-32 w-32 rounded-full flex items-center justify-center transition-all duration-500 ${
          isSessionActive 
            ? isSpeaking 
              ? "bg-indigo-500/20 shadow-[0_0_40px_rgba(99,102,241,0.3)]" 
              : "bg-green-500/10"
            : "bg-slate-800"
        }`}>
          {isLoading ? (
            <Loader2 className="h-12 w-12 text-indigo-400 animate-spin" />
          ) : isSessionActive ? (
            <div className={`h-16 w-16 rounded-full flex items-center justify-center transition-all duration-300 ${
              isSpeaking ? "bg-indigo-500 scale-110" : "bg-green-500"
            }`}>
              <Volume2 className="h-8 w-8 text-white" />
            </div>
          ) : (
            <div className="h-16 w-16 rounded-full bg-slate-700 flex items-center justify-center">
              <Mic className="h-8 w-8 text-slate-400" />
            </div>
          )}
          
          {/* Ripple effect when speaking */}
          {isSpeaking && (
            <>
              <div className="absolute inset-0 rounded-full border-2 border-indigo-500/50 animate-ping" />
              <div className="absolute -inset-4 rounded-full border border-indigo-500/30 animate-pulse" />
            </>
          )}
        </div>

        {/* Status Text */}
        <div className="text-center space-y-1">
          <h3 className="text-lg font-medium">
            {isLoading ? "Connexion en cours..." : 
             isSessionActive ? (isSpeaking ? "L'IA parle..." : "À vous de parler") : 
             "Prêt à commencer ?"}
          </h3>
          <p className="text-sm text-slate-400">
            {isSessionActive ? "Microphone actif" : "Cliquez sur démarrer pour lancer la simulation"}
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-red-400 text-sm bg-red-900/20 px-4 py-2 rounded-md border border-red-900/50">
            {error}
          </div>
        )}

        {/* Controls */}
        <div className="flex gap-4 w-full">
          {!isSessionActive ? (
            <Button 
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white h-12 text-lg font-medium shadow-lg shadow-indigo-900/20"
              onClick={startCall}
              disabled={isLoading}
            >
              <Phone className="mr-2 h-5 w-5" />
              Démarrer l'entretien
            </Button>
          ) : (
            <Button 
              variant="destructive" 
              className="w-full bg-red-600 hover:bg-red-700 text-white h-12 text-lg font-medium shadow-lg shadow-red-900/20"
              onClick={stopCall}
            >
              <PhoneOff className="mr-2 h-5 w-5" />
              Raccrocher
            </Button>
          )}
        </div>
        
        {!isSessionActive && (
          <p className="text-xs text-slate-500 text-center max-w-xs">
            Assurez-vous d'être dans un endroit calme et d'autoriser l'accès au microphone.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
