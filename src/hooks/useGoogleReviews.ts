import { useState, useEffect } from 'react';

// Configuration from environment variables
const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY || "";
const PLACE_ID = import.meta.env.VITE_GOOGLE_PLACE_ID || "";

export interface Review {
  author_name: string;
  author_url?: string;
  profile_photo_url?: string;
  rating: number;
  text: string;
  relative_time_description: string;
  time?: number;
}

interface UseGoogleReviewsResult {
  reviews: Review[];
  loading: boolean;
  error: string | null;
}

export function useGoogleReviews(): UseGoogleReviewsResult {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!GOOGLE_API_KEY || !PLACE_ID) {
      console.warn("Google API Key or Place ID missing. Using fallback data.");
      setLoading(false);
      return;
    }

    const loadGoogleScript = () => {
      // Check if script is already loaded
      // @ts-ignore
      if (window.google && window.google.maps && window.google.maps.places) {
        fetchReviews();
        return;
      }

      // Check if script tag exists
      const existingScript = document.querySelector(`script[src*="maps.googleapis.com/maps/api/js"]`);
      if (existingScript) {
        existingScript.addEventListener('load', fetchReviews);
        return;
      }

      // Load script
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = fetchReviews;
      script.onerror = () => {
        setError("Failed to load Google Maps script");
        setLoading(false);
      };
      document.body.appendChild(script);
    };

    const fetchReviews = () => {
      try {
        // @ts-ignore
        const google = window.google;
        if (!google || !google.maps || !google.maps.places) {
           throw new Error("Google Maps API not available");
        }

        const mapDiv = document.createElement("div");
        const service = new google.maps.places.PlacesService(mapDiv);

        const request = {
          placeId: PLACE_ID,
          fields: ["reviews"], 
        };

        service.getDetails(request, (place: any, status: any) => {
          if (
            status === google.maps.places.PlacesServiceStatus.OK &&
            place &&
            place.reviews
          ) {
            setReviews(place.reviews);
          } else {
            setError("Could not fetch reviews");
          }
          setLoading(false);
        });
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadGoogleScript();
  }, []);

  return { reviews, loading, error };
}
