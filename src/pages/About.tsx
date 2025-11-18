import { motion } from "framer-motion";
import aboutTeam from "@/assets/about-team.jpg";
import { Heart, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We're passionate about bringing you the best in contemporary fashion",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a community of style-conscious individuals who inspire each other",
    },
    {
      icon: Award,
      title: "Quality",
      description: "Committed to delivering premium quality in every product we offer",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Always ahead of trends, bringing you the latest in fashion and lifestyle",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-hero-from to-hero-to py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Ash Trends</h1>
            <p className="text-lg text-muted-foreground">
              We're more than just a fashion brand. We're a lifestyle, a community, and a
              commitment to helping you express your unique style.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2024, Ash Trends emerged from a simple vision: to make premium
                fashion accessible to everyone who values quality and style.
              </p>
              <p>
                We believe that great fashion should be inclusive, sustainable, and
                expressive. Our curated collections bring together timeless pieces and
                contemporary trends, all carefully selected to help you build a wardrobe
                that truly reflects who you are.
              </p>
              <p>
                Today, we're proud to serve thousands of customers worldwide, each one
                part of our growing community of style enthusiasts who believe that
                fashion is more than what you wear—it's how you express yourself.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src={aboutTeam}
              alt="Ash Trends Team"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-8">
            To empower individuals to express their unique style through carefully
            curated, high-quality fashion pieces that blend contemporary design with
            timeless elegance. We're committed to making premium fashion accessible,
            sustainable, and inclusive for everyone.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="text-4xl font-bold text-accent mb-2">10K+</h3>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="text-4xl font-bold text-accent mb-2">500+</h3>
              <p className="text-muted-foreground">Premium Products</p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="text-4xl font-bold text-accent mb-2">50+</h3>
              <p className="text-muted-foreground">Countries Served</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
