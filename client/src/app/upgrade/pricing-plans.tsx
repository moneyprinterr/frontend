"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Zap } from "lucide-react"
import { motion } from "framer-motion"

export default function PricingPlans() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Passer au plan supérieur</h1>
          <p className="text-gray-400 text-lg">Débloquez tout le potentiel de l&apos;IA avec nos plans flexibles</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 h-full">
          {/* Free Plan */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="relative bg-gray-800 border-gray-700 hover:border-gray-600 transition-all duration-300 h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Gratuit</CardTitle>
                <CardDescription className="text-gray-400">Découvrez les bases de notre IA</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-6">
                  <p className="text-4xl font-bold text-white">
                    $0
                    <span className="text-lg font-normal text-gray-400">/mois</span>
                  </p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 mr-2 text-dopeer" />
                    Accès à GPT-4o mini
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 mr-2 text-dopeer" />
                    Mode vocal standard
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 mr-2 text-dopeer" />
                    Accès limité aux recherches web
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 mr-2 text-dopeer" />
                    Utilisation de GPT personnalisés
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full text-white border-gray-600 hover:bg-gray-700">
                  Commencer gratuitement
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Plus Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="relative bg-gray-800 border-dopeer hover:border-dopeer-hover transition-all duration-300 h-full flex flex-col">
              <div className="absolute -top-3 left-0 right-0 flex justify-center">
                <span className="bg-dopeer text-white text-sm font-semibold px-3 py-1 rounded-full">POPULAIRE</span>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Plus</CardTitle>
                <CardDescription className="text-gray-400">Pour les utilisateurs avancés</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-6">
                  <p className="text-4xl font-bold text-white">
                    $20
                    <span className="text-lg font-normal text-gray-400">/mois</span>
                  </p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 mr-2 text-dopeer" />
                    Toutes les fonctionnalités gratuites
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 mr-2 text-dopeer" />
                    Accès prioritaire aux nouveaux modèles
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 mr-2 text-dopeer" />
                    Mode vocal avancé
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 mr-2 text-dopeer" />
                    Génération d&apos;images DALL-E
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 mr-2 text-dopeer" />
                    Recherches web illimitées
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-dopeer text-white hover:bg-dopeer-hover">
                  <Zap className="mr-2 h-4 w-4" />
                  S&apos;abonner maintenant
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="relative bg-gray-800 border-gray-700 hover:border-gray-600 transition-all duration-300 h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Pro</CardTitle>
                <CardDescription className="text-gray-400">Pour les professionnels exigeants</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-6">
                  <p className="text-4xl font-bold text-white">
                    $200
                    <span className="text-lg font-normal text-gray-400">/mois</span>
                  </p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 mr-2 text-dopeer" />
                    Toutes les fonctionnalités Plus
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 mr-2 text-dopeer" />
                    Accès illimité à tous les modèles
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 mr-2 text-dopeer" />
                    API personnalisée
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 mr-2 text-dopeer" />
                    Support prioritaire 24/7
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 mr-2 text-dopeer" />
                    Fonctionnalités en avant-première
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full text-white border-gray-600 hover:bg-gray-700">
                  Contacter les ventes
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>

        {/* Footer Note */}
        <div className="mt-40">
          <p className="text-center text-gray-400 text-sm">
            Tous les prix sont en USD. La TVA peut s&apos;appliquer selon votre pays de résidence.
          </p>
          <p className="text-center text-gray-400 mt-2 text-sm">
            L&apos;abonnement se renouvelle automatiquement jusqu&apos;à son annulation.{" "}
            <a href="#" className="text-dopeer hover:underline">En savoir plus</a>
          </p>
        </div>
      </div>
    </div>
  );
}