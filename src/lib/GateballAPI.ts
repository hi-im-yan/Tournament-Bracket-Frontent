// lib/api.ts

import { TeamData } from "@/types/GateballAPITypes";
import { Match } from "@/types/MatchType";

export async function fetchData(data: Match[]): Promise<TeamData[]> { // Replace 'any[]' with appropriate type
    try {
      const response = await fetch('https://tournament-bracket-generator-gateball.onrender.com/tournament/classification-phase', {
        method: 'POST',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE"
        },
        body: JSON.stringify(data),
        mode: 'no-cors'
      }); // Replace with your API URL
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
  