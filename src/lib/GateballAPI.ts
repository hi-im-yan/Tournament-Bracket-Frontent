// lib/api.ts

import { TeamData } from "@/types/GateballAPITypes";
import { Match } from "@/types/MatchType";

export async function fetchData(data: Match[]): Promise<TeamData[]> { 
  
    try {
      const response = await fetch('https://tournament-bracket-generator-gateball.onrender.com/tournament/classification-phase', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }); // Replace with your API URL
      const jsonData: TeamData[] = await response.json();
      return jsonData;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
  