"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { PenTool, Video, BarChart2, Play, Eye, ThumbsUp } from "lucide-react"
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
} from "recharts"
import Link from "next/link"

const viewsData = [
  { date: "2023-01", views: 1000 },
  { date: "2023-02", views: 1500 },
  { date: "2023-03", views: 2000 },
  { date: "2023-04", views: 1800 },
  { date: "2023-05", views: 2500 },
  { date: "2023-06", views: 3000 },
]

const engagementData = [
  { name: "Likes", value: 55 },
  { name: "Comments", value: 30 },
  { name: "Shares", value: 15 },
]

const audienceData = [
  { age: "13-17", male: 10, female: 15 },
  { age: "18-24", male: 25, female: 30 },
  { age: "25-34", male: 15, female: 20 },
  { age: "35-44", male: 10, female: 12 },
  { age: "45+", male: 5, female: 8 },
]

const COLORS = ["#FFFFFF", "#CCCCCC", "#999999", "#666666"]

function FuturisticHeader({ title }: { title: string }) {
  return (
    <motion.h1
      className="text-5xl font-bold mb-8 text-white"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {title}
    </motion.h1>
  )
}

function AnimatedCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
      <Card className="mb-8 bg-gray-900 border-gray-800 shadow-lg shadow-black/20">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">{title}</CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </motion.div>
  )
}

function AnimatedStatistic({ icon: Icon, value, label }: { icon: React.ElementType; value: string; label: string }) {
  return (
    <motion.div
      className="text-center p-4 bg-gray-800 rounded-lg shadow-lg shadow-black/10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Icon className="mx-auto mb-2 text-white" size={24} />
      <motion.p
        className="text-2xl font-bold text-white"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
      >
        {value}
      </motion.p>
      <p className="text-sm text-gray-300">{label}</p>
    </motion.div>
  )
}

function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 border-r border-gray-800 shadow-lg shadow-black/20">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4 text-white">TikTok Automation</h2>
        <nav>
          <Link
            href="#"
            className="block py-2 px-4 text-gray-300 hover:bg-gray-800 hover:text-white rounded transition duration-200"
          >
            Tableau de bord
          </Link>
          <Link
            href="#"
            className="block py-2 px-4 text-gray-300 hover:bg-gray-800 hover:text-white rounded transition duration-200"
          >
            Historique
          </Link>
          <Link
            href="#"
            className="block py-2 px-4 text-gray-300 hover:bg-gray-800 hover:text-white rounded transition duration-200"
          >
            Paramètres
          </Link>
        </nav>
      </div>
    </div>
  )
}

function ResultsCharts() {
  return (
    <div className="grid grid-cols-2 gap-8">
      <Card className="bg-gray-900 border-gray-800 shadow-lg shadow-black/20">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-white">Évolution des Vues</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={viewsData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FFFFFF" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="date" stroke="#ffffff" />
              <YAxis stroke="#ffffff" />
              <CartesianGrid strokeDasharray="3 3" stroke="#444444" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#333",
                  border: "none",
                  boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
                }}
              />
              <Area type="monotone" dataKey="views" stroke="#FFFFFF" fillOpacity={1} fill="url(#colorViews)" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="bg-gray-900 border-gray-800 shadow-lg shadow-black/20">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-white">Engagement</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={engagementData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {engagementData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#333",
                  border: "none",
                  boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="bg-gray-900 border-gray-800 shadow-lg shadow-black/20 col-span-2">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-white">Démographie de l'Audience</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={audienceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444444" />
              <XAxis dataKey="age" stroke="#ffffff" />
              <YAxis stroke="#ffffff" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#333",
                  border: "none",
                  boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
                }}
              />
              <Legend />
              <Bar dataKey="male" stackId="a" fill="#FFFFFF" />
              <Bar dataKey="female" stackId="a" fill="#CCCCCC" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

export default function TikTokAutomationPanel() {
  const [story, setStory] = useState("")
  const [voice, setVoice] = useState("")
  const [video, setVideo] = useState("")

  const generateStory = () => {
    setStory("Voici une histoire générée par IA...")
  }

  const generateVoice = () => {
    setVoice("Voix générée par IA")
  }

  const editVideo = () => {
    setVideo("Vidéo montée")
  }

  return (
    <div className="flex h-screen bg-black text-gray-100">
      <Sidebar />

      <div className="flex-1 p-8 overflow-auto">
        <FuturisticHeader title="Panel d'Automatisation TikTok" />

        <AnimatedCard title="Tableau de bord">
          <div className="grid grid-cols-5 gap-4">
            <AnimatedStatistic icon={BarChart2} value="1.2K" label="Vues totales" />
            <AnimatedStatistic icon={PenTool} value="15" label="Histoires générées" />
            <AnimatedStatistic icon={Video} value="8" label="Vidéos créées" />
            <AnimatedStatistic icon={Eye} value="150" label="Vues moyennes" />
            <AnimatedStatistic icon={ThumbsUp} value="25" label="Likes moyens" />
          </div>
        </AnimatedCard>

        <Tabs defaultValue="story" className="w-full space-y-4">
          <TabsList className="grid w-full grid-cols-4 bg-gray-800 rounded-lg p-1">
            <TabsTrigger value="story" className="data-[state=active]:bg-white data-[state=active]:text-black">
              Génération d'Histoire
            </TabsTrigger>
            <TabsTrigger value="voice" className="data-[state=active]:bg-white data-[state=active]:text-black">
              Génération de Voix
            </TabsTrigger>
            <TabsTrigger value="video" className="data-[state=active]:bg-white data-[state=active]:text-black">
              Montage Vidéo
            </TabsTrigger>
            <TabsTrigger value="results" className="data-[state=active]:bg-white data-[state=active]:text-black">
              Nos Résultats
            </TabsTrigger>
          </TabsList>

          <TabsContent value="story">
            <AnimatedCard title="Génération d'Histoire par IA">
              <CardDescription className="text-gray-400 mb-4">
                Créez une histoire captivante pour votre vidéo TikTok
              </CardDescription>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="prompt" className="text-gray-300">
                    Prompt
                  </Label>
                  <Input
                    id="prompt"
                    placeholder="Entrez un prompt pour générer une histoire"
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="genre" className="text-gray-300">
                    Genre
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                      <SelectValue placeholder="Sélectionnez un genre" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="comedy">Comédie</SelectItem>
                      <SelectItem value="drama">Drame</SelectItem>
                      <SelectItem value="action">Action</SelectItem>
                      <SelectItem value="romance">Romance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="story" className="text-gray-300">
                    Histoire générée
                  </Label>
                  <Textarea
                    id="story"
                    placeholder="L'histoire générée apparaîtra ici"
                    value={story}
                    readOnly
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                  />
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <Button onClick={generateStory} className="bg-white text-black hover:bg-gray-200">
                  Générer une Histoire
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-gray-800">
                  <Play className="mr-2 h-4 w-4" /> Prévisualiser
                </Button>
              </div>
            </AnimatedCard>
          </TabsContent>

          <TabsContent value="voice">
            <AnimatedCard title="Génération de Voix par IA">
              <CardDescription className="text-gray-400 mb-4">
                Créez une voix unique pour votre vidéo TikTok
              </CardDescription>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="text" className="text-gray-300">
                    Texte à convertir en voix
                  </Label>
                  <Textarea
                    id="text"
                    placeholder="Entrez le texte à convertir en voix"
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="voice-type" className="text-gray-300">
                    Type de voix
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                      <SelectValue placeholder="Sélectionnez un type de voix" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Homme</SelectItem>
                      <SelectItem value="female">Femme</SelectItem>
                      <SelectItem value="robot">Robot</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="pitch" className="text-gray-300">
                    Hauteur de la voix
                  </Label>
                  <Slider defaultValue={[50]} max={100} step={1} className="[&>span]:bg-white" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="voice" className="text-gray-300">
                    Voix générée
                  </Label>
                  <Input id="voice" value={voice} readOnly className="bg-gray-800 border-gray-700 text-white" />
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <Button onClick={generateVoice} className="bg-white text-black hover:bg-gray-200">
                  Générer une Voix
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-gray-800">
                  <Play className="mr-2 h-4 w-4" /> Écouter
                </Button>
              </div>
            </AnimatedCard>
          </TabsContent>

          <TabsContent value="video">
            <AnimatedCard title="Montage Vidéo">
              <CardDescription className="text-gray-400 mb-4">Montez votre vidéo TikTok</CardDescription>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="videoUpload" className="text-gray-300">
                    Télécharger une vidéo
                  </Label>
                  <Input
                    id="videoUpload"
                    type="file"
                    accept="video/*"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label className="text-gray-300">Timeline</Label>
                  <div className="bg-gray-800 h-16 rounded-md relative overflow-hidden">
                    <motion.div
                      className="absolute top-0 left-0 w-1/4 h-full bg-white"
                      initial={{ width: 0 }}
                      animate={{ width: "25%" }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div
                      className="absolute top-0 left-1/4 w-1/4 h-full bg-gray-400"
                      initial={{ width: 0 }}
                      animate={{ width: "25%" }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />
                    <motion.div
                      className="absolute top-0 left-2/4 w-1/4 h-full bg-gray-600"
                      initial={{ width: 0 }}
                      animate={{ width: "25%" }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="editProgress" className="text-gray-300">
                    Progression du montage
                  </Label>
                  <Progress value={33} className="h-2 [&>div]:bg-white" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="editedVideo" className="text-gray-300">
                    Vidéo montée
                  </Label>
                  <Input id="editedVideo" value={video} readOnly className="bg-gray-800 border-gray-700 text-white" />
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <Button onClick={editVideo} className="bg-white text-black hover:bg-gray-200">
                  Monter la Vidéo
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-gray-800">
                  <Play className="mr-2 h-4 w-4" /> Prévisualiser
                </Button>
              </div>
            </AnimatedCard>
          </TabsContent>

          <TabsContent value="results">
            <ResultsCharts />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
