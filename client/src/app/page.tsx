"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { PenTool, Video, BarChart2, Play } from "lucide-react"

export default function TikTokAutomationPanel() {
  const [story, setStory] = useState("")
  const [voice, setVoice] = useState("")
  const [video, setVideo] = useState("")

  const generateStory = () => {
    // Logique de génération d'histoire par IA
    setStory("Voici une histoire générée par IA...")
  }

  const generateVoice = () => {
    // Logique de génération de voix par IA
    setVoice("Voix générée par IA")
  }

  const editVideo = () => {
    // Logique de montage vidéo
    setVideo("Vidéo montée")
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Barre latérale */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">TikTok Automation</h2>
          <nav>
            <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">
              Tableau de bord
            </a>
            <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">
              Historique
            </a>
            <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">
              Paramètres
            </a>
          </nav>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="flex-1 p-8 overflow-auto">
        <h1 className="text-3xl font-bold mb-6">Panel d'Automatisation TikTok</h1>

        {/* Tableau de bord */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Tableau de bord</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <BarChart2 className="mx-auto mb-2" />
                <p className="text-2xl font-bold">1.2K</p>
                <p className="text-sm text-gray-500">Vues totales</p>
              </div>
              <div className="text-center">
                <PenTool className="mx-auto mb-2" />
                <p className="text-2xl font-bold">15</p>
                <p className="text-sm text-gray-500">Histoires générées</p>
              </div>
              <div className="text-center">
                <Video className="mx-auto mb-2" />
                <p className="text-2xl font-bold">8</p>
                <p className="text-sm text-gray-500">Vidéos créées</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="story" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="story">Génération d'Histoire</TabsTrigger>
            <TabsTrigger value="voice">Génération de Voix</TabsTrigger>
            <TabsTrigger value="video">Montage Vidéo</TabsTrigger>
          </TabsList>

          <TabsContent value="story">
            <Card>
              <CardHeader>
                <CardTitle>Génération d'Histoire par IA</CardTitle>
                <CardDescription>Créez une histoire captivante pour votre vidéo TikTok</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="prompt">Prompt</Label>
                    <Input id="prompt" placeholder="Entrez un prompt pour générer une histoire" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="genre">Genre</Label>
                    <Select>
                      <SelectTrigger>
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
                    <Label htmlFor="story">Histoire générée</Label>
                    <Textarea id="story" placeholder="L'histoire générée apparaîtra ici" value={story} readOnly />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button onClick={generateStory}>Générer une Histoire</Button>
                <Button variant="outline">
                  <Play className="mr-2 h-4 w-4" /> Prévisualiser
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="voice">
            <Card>
              <CardHeader>
                <CardTitle>Génération de Voix par IA</CardTitle>
                <CardDescription>Créez une voix unique pour votre vidéo TikTok</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="text">Texte à convertir en voix</Label>
                    <Textarea id="text" placeholder="Entrez le texte à convertir en voix" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="voice-type">Type de voix</Label>
                    <Select>
                      <SelectTrigger>
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
                    <Label htmlFor="pitch">Hauteur de la voix</Label>
                    <Slider defaultValue={[50]} max={100} step={1} />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="voice">Voix générée</Label>
                    <Input id="voice" value={voice} readOnly />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button onClick={generateVoice}>Générer une Voix</Button>
                <Button variant="outline">
                  <Play className="mr-2 h-4 w-4" /> Écouter
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="video">
            <Card>
              <CardHeader>
                <CardTitle>Montage Vidéo</CardTitle>
                <CardDescription>Montez votre vidéo TikTok</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="videoUpload">Télécharger une vidéo</Label>
                    <Input id="videoUpload" type="file" accept="video/*" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label>Timeline</Label>
                    <div className="bg-gray-200 h-16 rounded-md relative">
                      <div className="absolute top-0 left-0 w-1/4 h-full bg-blue-500 rounded-md"></div>
                      <div className="absolute top-0 left-1/4 w-1/4 h-full bg-green-500 rounded-md"></div>
                      <div className="absolute top-0 left-2/4 w-1/4 h-full bg-yellow-500 rounded-md"></div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="editProgress">Progression du montage</Label>
                    <Progress value={33} />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="editedVideo">Vidéo montée</Label>
                    <Input id="editedVideo" value={video} readOnly />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button onClick={editVideo}>Monter la Vidéo</Button>
                <Button variant="outline">
                  <Play className="mr-2 h-4 w-4" /> Prévisualiser
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

