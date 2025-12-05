import { Heart, Star, Send, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

interface Comment {
  id: string;
  text: string;
  date: string;
}

interface TipCardProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TipCard = ({ id, icon, title, description }: TipCardProps) => {
  const [liked, setLiked] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [showComments, setShowComments] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const savedLike = localStorage.getItem(`tip-${id}-liked`);
    const savedRating = localStorage.getItem(`tip-${id}-rating`);
    const savedComments = localStorage.getItem(`tip-${id}-comments`);

    if (savedLike) setLiked(JSON.parse(savedLike));
    if (savedRating) setRating(JSON.parse(savedRating));
    if (savedComments) setComments(JSON.parse(savedComments));
  }, [id]);

  const handleLike = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    localStorage.setItem(`tip-${id}-liked`, JSON.stringify(newLiked));
  };

  const handleRating = (value: number) => {
    setRating(value);
    localStorage.setItem(`tip-${id}-rating`, JSON.stringify(value));
    toast({
      title: "¡Gracias por tu calificación!",
      description: `Has dado ${value} estrella${value > 1 ? "s" : ""} a este tip.`,
    });
  };

  const handleSubmitComment = () => {
    if (!newComment.trim()) {
      toast({
        title: "Error",
        description: "Por favor escribe un comentario.",
        variant: "destructive",
      });
      return;
    }

    const comment: Comment = {
      id: Date.now().toString(),
      text: newComment.trim(),
      date: new Date().toLocaleDateString("es-ES"),
    };

    const updatedComments = [...comments, comment];
    setComments(updatedComments);
    localStorage.setItem(`tip-${id}-comments`, JSON.stringify(updatedComments));
    setNewComment("");
    toast({
      title: "¡Comentario enviado!",
      description: "Tu comentario ha sido publicado.",
    });
  };

  return (
    <div className="glass-card p-6 flex flex-col h-full">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
        {/* Like Button */}
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 transition-all duration-300 ${
            liked ? "text-accent" : "text-muted-foreground hover:text-accent"
          }`}
        >
          <Heart
            className={`w-6 h-6 transition-all duration-300 ${
              liked ? "fill-current animate-pulse-heart" : ""
            }`}
          />
          <span className="text-sm font-medium">
            {liked ? "Me encanta" : "Me gusta"}
          </span>
        </button>

        {/* Star Rating */}
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => handleRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="transition-transform duration-200 hover:scale-110"
            >
              <Star
                className={`w-5 h-5 transition-all duration-200 ${
                  star <= (hoverRating || rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-muted-foreground/40"
                } ${star <= rating ? "animate-star-glow" : ""}`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Comments Toggle */}
      <button
        onClick={() => setShowComments(!showComments)}
        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mt-4 text-sm"
      >
        <MessageCircle className="w-4 h-4" />
        <span>
          {comments.length} comentario{comments.length !== 1 ? "s" : ""}
        </span>
      </button>

      {/* Comments Section */}
      {showComments && (
        <div className="mt-4 pt-4 border-t border-border/50 space-y-4">
          {/* Existing Comments */}
          {comments.length > 0 && (
            <div className="space-y-3 max-h-40 overflow-y-auto">
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className="bg-secondary/50 rounded-xl p-3 text-sm"
                >
                  <p className="text-foreground">{comment.text}</p>
                  <span className="text-muted-foreground text-xs mt-1 block">
                    {comment.date}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* New Comment */}
          <div className="space-y-2">
            <Textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Escribe tu comentario..."
              className="bg-secondary/30 border-border/50 resize-none text-sm"
              rows={2}
            />
            <Button
              onClick={handleSubmitComment}
              size="sm"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Send className="w-4 h-4 mr-2" />
              Enviar comentario
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TipCard;
