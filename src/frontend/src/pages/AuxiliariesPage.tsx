import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Layers } from "lucide-react";
import { motion } from "motion/react";
import { modalAuxiliaries, primaryAuxiliaries } from "../data/grammarData";

export default function AuxiliariesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <div
          className="flex items-center justify-center w-14 h-14 rounded-2xl"
          style={{
            background: "oklch(0.95 0.06 265)",
            color: "oklch(0.48 0.22 265)",
          }}
        >
          <Layers className="w-7 h-7" />
        </div>
        <div>
          <h1 className="font-display text-3xl md:text-4xl font-extrabold text-foreground">
            Auxiliary Verbs
          </h1>
          <p className="text-muted-foreground font-body mt-0.5">
            Primary and modal auxiliaries explained with examples
          </p>
        </div>
      </motion.div>

      <Tabs defaultValue="primary">
        <TabsList className="mb-8 p-1 gap-1">
          <TabsTrigger
            value="primary"
            className="px-6 py-2.5 font-semibold"
            data-ocid="auxiliaries.primary.tab"
          >
            🔑 Primary Auxiliaries
          </TabsTrigger>
          <TabsTrigger
            value="modal"
            className="px-6 py-2.5 font-semibold"
            data-ocid="auxiliaries.modal.tab"
          >
            ✨ Modal Auxiliaries
          </TabsTrigger>
        </TabsList>

        {/* Primary Auxiliaries */}
        <TabsContent value="primary">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6"
          >
            <h2
              className="font-display text-2xl font-bold mb-1"
              style={{ color: "oklch(0.48 0.22 265)" }}
            >
              Primary Auxiliaries
            </h2>
            <p className="text-muted-foreground font-body text-sm">
              BE, HAVE, and DO — the building blocks of English grammar
            </p>
          </motion.div>

          <div className="grid md:grid-cols-1 gap-6">
            {primaryAuxiliaries.map((aux, i) => (
              <motion.div
                key={aux.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border bg-card shadow-card overflow-hidden"
              >
                {/* Card Header */}
                <div
                  className="px-6 py-5 flex items-center justify-between"
                  style={{
                    background: aux.color.replace(")", " / 8%)"),
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center font-display font-extrabold text-2xl text-white"
                      style={{ background: aux.color }}
                    >
                      {aux.name}
                    </div>
                    <div>
                      <div className="font-display text-lg font-bold text-foreground">
                        Primary Auxiliary:{" "}
                        <span style={{ color: aux.color }}>{aux.name}</span>
                      </div>
                      <div className="text-muted-foreground text-sm font-body mt-0.5">
                        {aux.usage}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-5">
                  {/* Forms */}
                  <div className="mb-5">
                    <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                      All Forms
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {aux.forms.map((form) => (
                        <Badge
                          key={form}
                          className="text-sm font-mono font-semibold px-3 py-1"
                          style={{
                            background: aux.color.replace(")", " / 12%)"),
                            color: aux.color,
                            borderColor: "transparent",
                          }}
                        >
                          {form}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Examples */}
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                      Example Sentences
                    </div>
                    <div className="space-y-2.5">
                      {aux.examples.map((ex, exIdx) => (
                        <div
                          key={ex}
                          className="flex items-start gap-3 rounded-lg px-4 py-3 bg-muted/40"
                          style={{ borderLeft: `3px solid ${aux.color}` }}
                        >
                          <span
                            className="shrink-0 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center text-white mt-0.5"
                            style={{ background: aux.color }}
                          >
                            {exIdx + 1}
                          </span>
                          <span className="font-body text-sm md:text-base text-foreground">
                            {ex}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* Modal Auxiliaries */}
        <TabsContent value="modal">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6"
          >
            <h2
              className="font-display text-2xl font-bold mb-1"
              style={{ color: "oklch(0.48 0.22 265)" }}
            >
              Modal Auxiliary Verbs
            </h2>
            <p className="text-muted-foreground font-body text-sm">
              10 modal verbs — each with a specific meaning and use
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {modalAuxiliaries.map((modal, i) => (
              <motion.div
                key={modal.modal}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border bg-card shadow-card p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="px-4 py-2 rounded-xl font-display font-extrabold text-lg text-white"
                    style={{ background: modal.color }}
                  >
                    {modal.modal}
                  </div>
                  <div className="text-sm text-muted-foreground font-body">
                    {modal.usage}
                  </div>
                </div>

                <div className="space-y-2">
                  {modal.examples.map((ex) => (
                    <div
                      key={ex}
                      className="rounded-lg px-4 py-2.5 text-sm font-body text-foreground"
                      style={{
                        background: "oklch(0.97 0.01 265)",
                        borderLeft: `3px solid ${modal.color}`,
                      }}
                    >
                      {ex}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
